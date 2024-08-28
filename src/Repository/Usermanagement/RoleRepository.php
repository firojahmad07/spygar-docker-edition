<?php

namespace App\Repository\Usermanagement;

use App\Entity\Usermanagement\Role;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Role>
 */
class RoleRepository extends ServiceEntityRepository
{
    private $entityManager;
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Role::class);
        $this->entityManager = $registry->getManager();
    }

    public function create(string $code, array $permissions) 
    {
        $roleInstance = $this->findOneByCode($code);
        $roleInstance = $roleInstance ? $roleInstance : new Role;

        $roleInstance->setCode($code);
        $roleInstance->setPermissions($permissions);
        
        $this->entityManager->persist($roleInstance);
        $this->entityManager->flush();
    }
    //    /**
    //     * @return Role[] Returns an array of Role objects
    //     */
    //    public function findByExampleField($value): array
    //    {
    //        return $this->createQueryBuilder('r')
    //            ->andWhere('r.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->orderBy('r.id', 'ASC')
    //            ->setMaxResults(10)
    //            ->getQuery()
    //            ->getResult()
    //        ;
    //    }

    //    public function findOneBySomeField($value): ?Role
    //    {
    //        return $this->createQueryBuilder('r')
    //            ->andWhere('r.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->getQuery()
    //            ->getOneOrNullResult()
    //        ;
    //    }
}
