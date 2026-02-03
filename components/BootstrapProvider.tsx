'use client'

import { useEffect } from 'react'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

export default function BootstrapProvider({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    // แค่ import ก็พอ Bootstrap จะ register ตัวเอง
  }, [])

  return <>{children}</>
}