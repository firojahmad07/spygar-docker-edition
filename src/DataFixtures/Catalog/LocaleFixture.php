<?php

namespace App\DataFixtures\Catalog;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use App\Entity\Catalog\Locale;
use League\Csv\Reader;

class LocaleFixture extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $csvPath = __DIR__ . '/../data/locales.csv';
        $csv = Reader::createFromPath($csvPath, 'r');
        $csv->setHeaderOffset(0);
        foreach ($csv as $record) {
            $entity = new Locale();
            $entity->setCode($record['code']);
            $entity->setActive(false);
            $manager->persist($entity);
        }
        $manager->flush();

    }

    public static function getGroups(): array
    {
        return ['catalog'];
    }
}
