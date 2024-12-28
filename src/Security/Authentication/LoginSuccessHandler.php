<?php

namespace App\Security\Authentication;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\Security\Http\Authentication\AuthenticationSuccessHandlerInterface;
use Symfony\Component\HttpFoundation\Request;

class LoginSuccessHandler implements AuthenticationSuccessHandlerInterface
{
    public function __construct(private Security $security)
    {
    }

    public function onAuthenticationSuccess(Request $request, TokenInterface $token): JsonResponse
    {
        // Return a custom JSON response on success
        $user = $this->security->getUser();
        // $user->setAccessToken();
        // dump("we are here", get_class_methods($this->security));die;
        return new JsonResponse([
            'message' => 'Authentication successful',
            'token' => "asdfasdfasdfasdfasdfsad"
        ]);
    }
}
