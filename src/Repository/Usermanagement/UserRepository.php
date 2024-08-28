<?php

namespace App\Repository\Usermanagement;

use App\Entity\Usermanagement\User;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use App\Repository\Usermanagement\RoleRepository;

/**
 * @extends ServiceEntityRepository<User>
 */
class UserRepository extends ServiceEntityRepository
{
    private $entityManager;
    public function __construct(
        private ManagerRegistry $registry,
        private UserPasswordHasherInterface $passwordHasher,
        private RoleRepository $roleRepository
    ) {
        parent::__construct($registry, User::class);
        $this->entityManager = $registry->getManager();
    }

    public function create(string $firstName, string $lastName, string $email, string $password, bool $status, string $role)
    {
        $user = $this->findOneBy(['email' => $email]);
        $user = $user ? $user : new User;
        $role = $this->roleRepository->findOneByCode($role);

        $user->setFirstName($firstName);
        $user->setLastName($lastName);
        $user->setEmail($email);
        $user->setPassword($this->passwordHasher->hashPassword($user, $password));
        $user->setStatus($status);
        $user->addRole($role);

        $this->entityManager->persist($user);
        $this->entityManager->flush();
    }

    //    /**
    //     * @return User[] Returns an array of User objects
    //     */
    //    public function findByExampleField($value): array
    //    {
    //        return $this->createQueryBuilder('u')
    //            ->andWhere('u.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->orderBy('u.id', 'ASC')
    //            ->setMaxResults(10)
    //            ->getQuery()
    //            ->getResult()
    //        ;
    //    }

    //    public function findOneBySomeField($value): ?User
    //    {
    //        return $this->createQueryBuilder('u')
    //            ->andWhere('u.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->getQuery()
    //            ->getOneOrNullResult()
    //        ;
    //    }
}
