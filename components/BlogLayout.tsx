import AlertBanner from 'components/AlertBanner'
import Navbar from './Header'

export default function BlogLayout({
  preview,
  loading,
  children,
}: {
  preview: boolean
  loading?: boolean
  children: React.ReactNode
}) {
  return (
    <>
      <div className="min-h-screen w-full">
        <AlertBanner preview={preview} loading={loading} />
        <Navbar />
        <main>{children}</main>
      </div>
    </>
  )
}
