import Head from 'next/head'
import React from 'react'

type PageProps = {
  title: string,
  children: React.ReactNode,
  meta?: React.ReactNode
}

const Page = ({children, title='Wata', meta}: PageProps) => (
  <>
    <Head>
      <title>{title}</title>
      <link rel="shortcut icon" href="/logo/logo_icon.svg" />
      {meta}
    </Head>
    {children}
  </>
)

export default Page

