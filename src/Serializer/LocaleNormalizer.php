<?php

namespace App\Serializer;

use App\Entity\Catalog\Locale as LocaleEntity;
use Symfony\Component\Serializer\Normalizer\NormalizerInterface;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
// use \Locale as phpLocale;

class LocaleNormalizer implements NormalizerInterface
{
    public function __construct(
        private ObjectNormalizer $normalizer,

    ) {
    }

    public function normalize($locale, ?string $format = null, array $context = []): array
    {
        $data = $this->normalizer->normalize($locale, $format, $context);
        if ($locale instanceof LocaleEntity) {
            // Map locale codes to labels
            $labels = locale_get_display_language($locale->getCode());
            // Add the label without removing existing attributes
            $data['attributes']['label'] = $labels;
        }
        // dump($data);die;
        return $data['data'] = $data;
    }

    public function supportsNormalization($data, ?string $format = null, array $context = []): bool
    {
        return $data instanceof LocaleEntity;
    }

    public function getSupportedTypes(?string $format): array
    {
        return [
            LocaleEntity::class => true,
        ];
    }
}
