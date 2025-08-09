"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface AccessModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  onRefuse: () => void // Adiciona a nova prop para a ação de recusa
}

export function AccessModal({ isOpen, onClose, onConfirm, onRefuse }: AccessModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] p-6 rounded-lg shadow-lg bg-white">
        <DialogHeader className="text-center">
          <DialogTitle className="text-2xl font-bold text-orange-600 mb-2">SÓ R$10 PARA VER TUDO...</DialogTitle>
          <DialogDescription className="text-lg text-gray-800 font-medium">
            {"Ela tá esperando… toda peladinha e molhadinha..."}
            <br />
            {"⚠️ Conteúdo sem censura + vídeos exclusivos."}
            <br />
            {"Vai aguentar a curiosidade ou vai entrar agora?"}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex flex-col gap-3 mt-6">
          <Button
            onClick={() => {
              onConfirm()
              window.open("https://pay.kirvano.com/75b21f3e-df7a-45d8-a985-5fe2a0e4f0e2", "_blank")
            }}
            className="w-full bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white py-3 rounded-lg text-base font-semibold shadow-md"
          >
            QUERO VER TUDO AGORA
          </Button>
          <Button
            onClick={onRefuse} // Chama a nova função onRefuse
            variant="outline"
            className="w-full border-gray-300 text-gray-700 hover:bg-gray-100 active:bg-gray-200 py-3 rounded-lg text-base font-semibold bg-transparent"
          >
            Não, vou ficar só imaginando
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
