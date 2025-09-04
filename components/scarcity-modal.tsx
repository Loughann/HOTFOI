'use client'

import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useEffect, useState } from "react"

interface ScarcityModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirmBonus: () => void;
}

export function ScarcityModal({ isOpen, onClose, onConfirmBonus }: ScarcityModalProps) {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const today = new Date();
    today.setDate(today.getDate()); // Keep today's date
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const year = today.getFullYear();
    setCurrentDate(`${day}/${month}/${year}`);
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] p-6 rounded-lg shadow-lg bg-white">
        <DialogHeader className="text-center">
          <div className="bg-red-500 text-white text-sm font-bold py-2 px-4 rounded-t-lg -mx-6 -mt-6 mb-4">
            ACESSO POR R$9,90 VÁLIDO SOMENTE ATÉ {currentDate}
          </div>
          <Image
            src="/images/scarcity-modal-image.jpeg" // Usando a nova imagem
            alt="Oferta especial"
            width={300}
            height={200}
            className="w-full h-auto rounded-md mb-4 object-cover"
          />
          <DialogTitle className="text-2xl font-bold text-gray-900 mb-2">VOCÊ TEM CERTEZA?</DialogTitle>
          <DialogDescription className="text-lg text-gray-800 font-medium">
            Fazendo parte agora você vai ganhar um bônus comigo rs 💦..
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex flex-col gap-3 mt-6">
          <Button 
            onClick={onConfirmBonus} 
            className="w-full bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white py-3 rounded-lg text-base font-semibold shadow-md"
          >
            TER MEU BÔNUS ESPECIAL
          </Button>
          <Button 
            onClick={onClose} 
            variant="outline" 
            className="w-full border-gray-300 text-gray-700 hover:bg-gray-100 active:bg-gray-200 py-3 rounded-lg text-base font-semibold"
          >
            Não, estou sem dinheiro...
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
