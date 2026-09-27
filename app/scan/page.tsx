import { Suspense } from 'react'
import { ScanFallback } from '@/components/LocaleProvider'
import { ScanScreen } from '@/components/scan/ScanScreen'

export default function ScanPage() {
  return (
    <Suspense fallback={<ScanFallback />}>
      <ScanScreen />
    </Suspense>
  )
}
