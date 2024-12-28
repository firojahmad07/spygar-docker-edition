<?php

namespace App\Security\Authentication;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Security\Core\Exception\AuthenticationException;
use Symfony\Component\Security\Http\Authentication\AuthenticationFailureHandlerInterface;
use Symfony\Component\HttpFoundation\Request;

class LoginFailureHandler implements AuthenticationFailureHandlerInterface
{
    public function onAuthenticationFailure(Request $request, AuthenticationException $exception): JsonResponse
    {
        dump("we are here 45455");die;

        // Return a custom JSON response on failure
        return new JsonResponse([
            'error' => 'Invalid credentials',
            'message' => $exception->getMessageKey()
        ], JsonResponse::HTTP_UNAUTHORIZED);
    }
}
