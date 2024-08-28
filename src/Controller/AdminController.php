<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class AdminController extends AbstractController
{
    #[Route('/admin', name: 'app_admin')]
    public function index(): Response
    {
        return $this->render('admin.html.twig');
    }
    
    #[Route('/user/login', name: 'app_admin_login')]
    public function userLogin(Request $request): Response
    {
        // $userData = $reque
        return $this->render('admin.html.twig');
    }

    #[Route('/verify_token', name: 'app_verify_token')]
    public function verifyToken(Request $request): Response
    {
        // $userData = $reque
        return $this->render('admin.html.twig');
    }
}