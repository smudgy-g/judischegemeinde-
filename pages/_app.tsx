import 'tailwindcss/tailwind.css'

import { AppProps } from 'next/app'
import { Raleway } from 'next/font/google'
import { lazy, Suspense } from 'react'

export interface SharedPageProps {
  draftMode: boolean
  token: string
}

const PreviewProvider = lazy(() => import('components/PreviewProvider'))
const VisualEditing = lazy(() => import('components/VisualEditing'))

const raleway = Raleway({ subsets: ['latin'] })

export default function App({
  Component,
  pageProps,
}: AppProps<SharedPageProps>) {
  const { draftMode, token } = pageProps
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${raleway.style.fontFamily};
        }
      `}</style>
      {draftMode ? (
        <PreviewProvider token={token}>
          <Component {...pageProps} />
        </PreviewProvider>
      ) : (
        <Component {...pageProps} />
      )}
      {draftMode && (
        <Suspense>
          <VisualEditing />
        </Suspense>
      )}
    </>
  )
}
