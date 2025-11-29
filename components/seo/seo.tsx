import { Metadata } from 'next'

import React from 'react'

import siteConfig from '#data/config'

export interface SEOProps {
  title?: string
  description?: string
  [key: string]: any
}

export const getSEOMetadata = ({ title, description, ...props }: SEOProps = {}): Metadata => {
  return {
    title: title ? `${title} ${siteConfig.seo.titleTemplate}` : siteConfig.seo.title,
    description: description || siteConfig.seo.description,
    openGraph: {
      ...siteConfig.seo.openGraph,
      title,
      description,
    },
    twitter: siteConfig.seo.twitter,
    ...props,
  }
}

// For backward compatibility, export a component that does nothing
// since metadata is now handled at the page level
export const SEO = ({ title, description, ...props }: SEOProps) => null
