<?php

namespace App\Controller\Api;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Security\Core\Exception\AuthenticationException;
use Symfony\Bundle\SecurityBundle\Security;
use Lexik\Bundle\JWTAuthenticationBundle\Services\JWTTokenManagerInterface;

class LoginController extends AbstractController
{
    #[Route('/api/login', name: 'app_api_login')]
    public function index(JWTTokenManagerInterface $JWTManager): Response
    {
        $user = $this->getUser();

        if (!$user) {
            throw new AuthenticationException('Invalid credentials');
        }
    
        // Manually generate token
        $token = $JWTManager->create($user);
        dump("we are here");die;
        // return new JsonResponse(['access_token' => $token]);
    }

    #[Route('/api/user', name: 'app_api_verify_token')]
    public function verifyToken(Request $request)
    {
        $user = $this->getUser();
        // $this->getUser();
        // dump($request->request->all());die;
        if (!$user) {
            return new JsonResponse(['error' => 'User not authenticated'], 401);
        }
        // Optionally, return or check claims
        return new JsonResponse(data: [
            'identifier' => $user->getUserIdentifier(),
            'roles' => $user->getRoles()
        ]);
    }
}
