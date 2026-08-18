import React, { useEffect } from 'react';
import { DetailedService } from '../../types';
import { COMPANY_INFO } from '../../data/company';

export interface SeoHeadProps {
  service?: DetailedService;
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogTitle?: string;
  ogDescription?: string;
  schemaType?: string;
}

export const SeoHead: React.FC<SeoHeadProps> = ({
  service,
  title,
  description,
  keywords = [],
  canonicalUrl,
  ogTitle,
  ogDescription,
  schemaType = 'WebPage'
}) => {
  useEffect(() => {
    // Determine metadata values from service or fallback props
    const metaTitle = service?.seo.metaTitle || title || `${COMPANY_INFO.name} | Solutions & Support IT Abidjan`;
    const metaDesc = service?.seo.metaDescription || description || COMPANY_INFO.description;
    const metaKeywordsList = service?.seo.keywords || keywords || [
      'entreprise informatique abidjan',
      "création site web côte d'ivoire",
      'logiciel de gestion abidjan',
      "maintenance informatique côte d'ivoire"
    ];
    const pageOgTitle = service?.seo.ogTitle || ogTitle || metaTitle;
    const pageOgDesc = service?.seo.ogDescription || ogDescription || metaDesc;
    const currentCleanPath = window.location.pathname.endsWith('/') && window.location.pathname !== '/'
      ? window.location.pathname.slice(0, -1)
      : window.location.pathname;
    const baseUrl = COMPANY_INFO.websiteUrl || 'https://360.cooldigital.africa';
    const pageCanonical = canonicalUrl || `${baseUrl}${currentCleanPath}`;

    // 1. Update Document Title
    document.title = metaTitle;

    // 2. Meta Description
    let metaDescriptionEl = document.querySelector('meta[name="description"]');
    if (!metaDescriptionEl) {
      metaDescriptionEl = document.createElement('meta');
      metaDescriptionEl.setAttribute('name', 'description');
      document.head.appendChild(metaDescriptionEl);
    }
    metaDescriptionEl.setAttribute('content', metaDesc);

    // 3. Meta Keywords
    let metaKeywordsEl = document.querySelector('meta[name="keywords"]');
    if (!metaKeywordsEl) {
      metaKeywordsEl = document.createElement('meta');
      metaKeywordsEl.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywordsEl);
    }
    metaKeywordsEl.setAttribute('content', metaKeywordsList.join(', '));

    // 4. Canonical URL Link
    let canonicalLinkEl = document.querySelector('link[rel="canonical"]');
    if (!canonicalLinkEl) {
      canonicalLinkEl = document.createElement('link');
      canonicalLinkEl.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLinkEl);
    }
    canonicalLinkEl.setAttribute('href', pageCanonical);

    // 5. OpenGraph & Social Cards Tags
    const ogImage = 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&h=630&q=80';
    const ogTags = [
      { property: 'og:title', content: pageOgTitle },
      { property: 'og:description', content: pageOgDesc },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: pageCanonical },
      { property: 'og:image', content: ogImage },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:site_name', content: COMPANY_INFO.name },
      { property: 'og:locale', content: 'fr_CI' },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:title', content: pageOgTitle },
      { property: 'twitter:description', content: pageOgDesc },
      { property: 'twitter:image', content: ogImage }
    ];

    ogTags.forEach(tag => {
      let el = document.querySelector(`meta[property="${tag.property}"], meta[name="${tag.property}"]`);
      if (!el) {
        el = document.createElement('meta');
        if (tag.property.startsWith('twitter:')) {
          el.setAttribute('name', tag.property);
        } else {
          el.setAttribute('property', tag.property);
        }
        document.head.appendChild(el);
      }
      el.setAttribute('content', tag.content);
    });

    // 6. Schema.org JSON-LD Structured Data
    const localBusinessSchema = {
      '@context': 'https://schema.org',
      '@type': 'ITStore',
      'name': COMPANY_INFO.name,
      'alternateName': COMPANY_INFO.shortName,
      'description': COMPANY_INFO.description,
      'url': baseUrl,
      'telephone': COMPANY_INFO.phone,
      'email': COMPANY_INFO.email,
      'priceRange': '$$',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': COMPANY_INFO.address,
        'addressLocality': COMPANY_INFO.city,
        'addressRegion': COMPANY_INFO.region,
        'addressCountry': 'CI'
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': 5.359952,
        'longitude': -4.008256
      },
      'openingHoursSpecification': {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        'opens': '08:00',
        'closes': '18:00'
      },
      'paymentAccepted': COMPANY_INFO.paymentMethods.join(', '),
      'currenciesAccepted': 'XOF'
    };

    const schemasToInject: object[] = [localBusinessSchema];

    if (service) {
      const serviceSchema = {
        '@context': 'https://schema.org',
        '@type': service.seo.schemaType || 'Service',
        'name': service.title,
        'description': service.seo.metaDescription,
        'provider': {
          '@type': 'LocalBusiness',
          'name': COMPANY_INFO.name,
          'telephone': COMPANY_INFO.phone,
          'email': COMPANY_INFO.email,
          'address': {
            '@type': 'PostalAddress',
            'streetAddress': COMPANY_INFO.address,
            'addressLocality': COMPANY_INFO.city,
            'addressCountry': 'CI'
          }
        },
        'areaServed': ['Abidjan', 'Côte d\'Ivoire', 'Afrique de l\'Ouest'],
        'serviceType': service.poleTitle,
        'termsOfService': 'Devis gratuit sans engagement',
        'hasOfferCatalog': {
          '@type': 'OfferCatalog',
          'name': service.title,
          'itemListElement': service.offerContent.flatMap((cat, idx) =>
            cat.items.map((item, itemIdx) => ({
              '@type': 'Offer',
              'itemOffered': {
                '@type': 'Service',
                'name': `${cat.category} : ${item}`
              },
              'position': idx * 10 + itemIdx + 1
            }))
          )
        }
      };

      const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': service.faqs.map(faq => ({
          '@type': 'Question',
          'name': faq.question,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': faq.answer
          }
        }))
      };

      const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Accueil',
            'item': baseUrl
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'Services',
            'item': `${baseUrl}/services`
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': service.title,
            'item': pageCanonical
          }
        ]
      };

      schemasToInject.push(serviceSchema, faqSchema, breadcrumbSchema);
    }

    let scriptLd = document.getElementById('json-ld-service') as HTMLScriptElement | null;
    if (!scriptLd) {
      scriptLd = document.createElement('script');
      scriptLd.id = 'json-ld-service';
      scriptLd.type = 'application/ld+json';
      document.head.appendChild(scriptLd);
    }
    scriptLd.textContent = JSON.stringify(schemasToInject);

    return () => {
      if (scriptLd) {
        scriptLd.textContent = '';
      }
    };
  }, [service, title, description, keywords, canonicalUrl, ogTitle, ogDescription, schemaType]);

  return null;
};

