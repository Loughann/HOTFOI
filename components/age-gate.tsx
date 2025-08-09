"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

interface AgeGateProps {
  onConfirm: () => void
  onRefuse: () => void
}

export default function AgeGate({ onConfirm, onRefuse }: AgeGateProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4 text-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <Image src="/images/privacy-logo.svg" alt="Privacy Logo" width={150} height={45} className="mx-auto mb-6" />
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Confirmação de Idade</h1>
        <p className="text-gray-700 mb-6">
          Este site contém conteúdo adulto. Você deve ter 18 anos ou mais para prosseguir.
        </p>
        <div className="space-y-4">
          <Button
            onClick={onConfirm}
            className="w-full bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white py-3 rounded-lg text-base font-semibold shadow-md"
          >
            Sim, sou maior de 18
          </Button>
          <Button
            onClick={onRefuse}
            variant="outline"
            className="w-full border-gray-300 text-gray-700 hover:bg-gray-100 active:bg-gray-200 py-3 rounded-lg text-base font-semibold bg-transparent"
          >
            Não
          </Button>
        </div>
      </div>
    </div>
  )
}
