<?php

namespace App\Command;

use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;
use Symfony\Component\Console\Question\Question;
use App\Repository\Usermanagement\RoleRepository;

#[AsCommand(
    name: 'spygar:create:role',
    description: 'Add a short description for your command',
)]
class SpygarCreateRoleCommand extends Command
{
    public function __construct(private RoleRepository $roleRepository)
    {
        parent::__construct();
    }

    protected function configure(): void
    {
        $this
            ->addArgument('arg1', InputArgument::OPTIONAL, 'Argument description')
            ->addOption('option1', null, InputOption::VALUE_NONE, 'Option description')
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);
        $helper = $this->getHelper('question');
        $codeQuestion = new Question('Please enter the role code(ex ROLE_ADMIN) : ', 'code');
        $roleCode = $helper->ask($input, $output, $codeQuestion);

        $permissionsQuestion = new Question('Please enter the permissions code(ex ADD_USER, EDIT_USER) : ', 'permissions');
        $rolePermissions = $helper->ask($input, $output, $permissionsQuestion);

        $this->roleRepository->create($roleCode, explode(",", $rolePermissions));

        $io->success($roleCode . ' created successfully.');

        return Command::SUCCESS;
    }
}
