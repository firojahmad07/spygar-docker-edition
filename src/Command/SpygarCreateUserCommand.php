<?php

namespace App\Command;

use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;
use App\Repository\Usermanagement\UserRepository;

#[AsCommand(
    name: 'spygar:create:user',
    description: 'Add a short description for your command',
)]
class SpygarCreateUserCommand extends Command
{
    public function __construct(private UserRepository $userRepository)
    {
        parent::__construct();
    }

    protected function configure(): void
    {
        $this
            ->addArgument('firstName', InputArgument::REQUIRED, 'The First name of the user')
            ->addArgument('lastName', InputArgument::REQUIRED, 'The Last name of the user')
            ->addArgument('email', InputArgument::REQUIRED, 'The Email of the user')
            ->addArgument('password', InputArgument::REQUIRED, 'The Password of the user')
            ->addArgument('status', InputArgument::REQUIRED, 'The Status of the user')
            ->addArgument('role', InputArgument::REQUIRED, 'The Role of the user')
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);
        $firstName  = $input->getArgument('firstName');
        $lastName   = $input->getArgument('lastName');
        $email      = $input->getArgument('email');
        $password   = $input->getArgument('password');
        $status     = boolval($input->getArgument('status'));
        $role       = $input->getArgument('role');

        $this->userRepository->create($firstName, $lastName, $email, $password, $status, $role);

        $io->success($email . ' user created successfully');

        return Command::SUCCESS;
    }
}
