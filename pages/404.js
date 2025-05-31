import BLOG from '@/blog.config'
import { siteConfig } from '@/lib/config'
import { getGlobalData } from '@/lib/db/getSiteData'
import { DynamicLayout } from '@/themes/theme'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

/**
 * 404
 * @param {*} props
 * @returns
 */
const NoFound = props => {
  const router = useRouter()
  
  // 立即重定向到首頁
  useEffect(() => {
    router.push('/')
  }, [router])
  
  const theme = siteConfig('THEME', BLOG.THEME, props.NOTION_CONFIG)
  return <DynamicLayout theme={theme} layoutName='Layout404' {...props} />
}

export async function getStaticProps(req) {
  const { locale } = req

  const props = (await getGlobalData({ from: '404', locale })) || {}
  return { props }
}

export default NoFound
