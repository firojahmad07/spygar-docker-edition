<?php

namespace App\DataFixtures\Catalog;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use App\Entity\Catalog\Currency;
use League\Csv\Reader;

class CurrencyFixture extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $csvPath = __DIR__ . '/../data/currencies.csv';
        $csv = Reader::createFromPath($csvPath, 'r');
        $csv->setHeaderOffset(0);
        $csv->setDelimiter(';');
                
        foreach ($csv as $record) {
            $entity = new Currency();
            $entity->setCode($record['code']);
            $entity->setActive(boolval($record['activated']));
            $manager->persist($entity);
        }
        $manager->flush();
    }
}
