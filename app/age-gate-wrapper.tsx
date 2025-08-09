"use client"

import { Button } from "@/components/ui/button"

import { useState, useEffect } from "react"
import AgeGate from "@/components/age-gate"
import ProfilePageClient from "./profile-page-client"

export default function AgeGateWrapper() {
  const [ageConfirmed, setAgeConfirmed] = useState<boolean | null>(null)
  const [showRefusal, setShowRefusal] = useState(false)

  useEffect(() => {
    // Check localStorage for age confirmation
    const storedConfirmation = localStorage.getItem("ageConfirmed")
    if (storedConfirmation === "true") {
      setAgeConfirmed(true)
    } else {
      setAgeConfirmed(false)
    }
  }, [])

  const handleConfirmAge = () => {
    localStorage.setItem("ageConfirmed", "true")
    setAgeConfirmed(true)
    setShowRefusal(false)
  }

  const handleRefuseAge = () => {
    localStorage.setItem("ageConfirmed", "false")
    setAgeConfirmed(false)
    setShowRefusal(true)
  }

  if (ageConfirmed === null) {
    // Still checking localStorage or initial render
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-gray-700">Carregando...</p>
      </div>
    )
  }

  if (ageConfirmed && !showRefusal) {
    return <ProfilePageClient />
  }

  if (showRefusal) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4 text-center">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Acesso Negado</h1>
          <p className="text-gray-700 mb-6">Você precisa ter 18 anos ou mais para acessar este conteúdo.</p>
          <Button
            onClick={() => setShowRefusal(false)} // Allow user to try again
            className="w-full bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white py-3 rounded-lg text-base font-semibold shadow-md"
          >
            Voltar
          </Button>
        </div>
      </div>
    )
  }

  return <AgeGate onConfirm={handleConfirmAge} onRefuse={handleRefuseAge} />
}
