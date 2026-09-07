import config from '@payload-config'
import { RootPage, generatePageMetadata } from '@payloadcms/next/views'
import { importMap } from './importMap'

export default function AdminPage({ params, searchParams }: { params: Promise<{ segments: string[] }>, searchParams: Promise<{ [key: string]: string | string[] }> }) {
  return RootPage({ config, importMap, params, searchParams })
}

export function generateMetadata({ params, searchParams }: { params: Promise<{ segments: string[] }>, searchParams: Promise<{ [key: string]: string | string[] }> }) {
  return generatePageMetadata({ config, params, searchParams })
}
