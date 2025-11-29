"use client"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { LoaderCircle } from "lucide-react"

export default function Home() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const redirect = async () => {
      await router.push('/login')
      setLoading(false)
    }

    redirect()
  }, [router])

  return (
    <div className="flex items-center justify-center w-full min-h-screen">
      {loading && <LoaderCircle size={25} className="animate-spin" />}
    </div>
  )
}
