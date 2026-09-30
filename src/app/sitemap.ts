import { MetadataRoute } from 'next'
import { businessConfig } from '@/config/business'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = businessConfig.websiteUrl;

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    }
  ]
}
