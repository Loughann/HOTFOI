'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'

export default function FloatingMonthlyButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      // Mostra o botão se o usuário rolou mais de 200px para baixo
      if (window.scrollY > 200) { 
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  const handleCheckoutClick = () => {
    window.open('https://app.kirvano.com/', '_blank');
  };

  return (
    <div
      className={`fixed bottom-4 left-1/2 -translate-x-1/2 w-full max-w-xs px-4 transition-all duration-300 ease-in-out z-50 ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
      }`}
    >
      <Button 
        onClick={handleCheckoutClick}
        className="w-full bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white py-4 rounded-full text-base font-semibold shadow-lg active:scale-95 transition-all"
      >
        ASSINAR MENSAL R$9,90
      </Button>
    </div>
  )
}
