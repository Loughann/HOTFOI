"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Globe, Heart, MessageCircle, Instagram, Camera, Video, Lock } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import FloatingMonthlyButton from "@/components/floating-monthly-button"
import { AccessModal } from "@/components/access-modal"
import { ScarcityModal } from "@/components/scarcity-modal"

export default function ProfilePageClient() {
  const fullBio =
    "Oi, meus amores! 🔥😘 Tenho 22 aninhos e hoje vou revelar um lado meu que vai te deixar sem fôlego rs... Imagine vídeos picantes e fotos de todas posições peladinha e sem censura... Já imaginou isso né amor? vem comigo ter essa experiência rs.."
  const [showFullBio, setShowFullBio] = useState(false)
  const bioMaxLength = 120

  const needsTruncation = fullBio.length > bioMaxLength
  const displayedText = needsTruncation && !showFullBio ? fullBio.substring(0, bioMaxLength) + "..." : fullBio

  const bioRef = useRef<HTMLParagraphElement>(null)
  const [bioHeight, setBioHeight] = useState("auto")

  const [isAccessModalOpen, setIsAccessModalOpen] = useState(false)
  const [isScarcityModalOpen, setIsScarcityModalOpen] = useState(false)
  const [isLiked, setIsLiked] = useState(false)

  useEffect(() => {
    if (bioRef.current) {
      if (!showFullBio && needsTruncation) {
        setBioHeight("56px")
      } else {
        setBioHeight(`${bioRef.current.scrollHeight}px`)
      }
    }
  }, [showFullBio, needsTruncation])

  const handleMediaClick = () => {
    setIsAccessModalOpen(true)
  }

  const handleAccessModalClose = () => {
    setIsAccessModalOpen(false)
  }

  const handleAccessModalConfirm = () => {
    window.open("https://pay.kirvano.com/75b21f3e-df7a-45d8-a985-5fe2a0e4f0e2", "_blank")
    setIsAccessModalOpen(false)
  }

  const handleAccessModalRefuse = () => {
    setIsAccessModalOpen(false)
    setIsScarcityModalOpen(true)
  }

  const handleScarcityModalClose = () => {
    setIsScarcityModalOpen(false)
  }

  const handleScarcityModalConfirmBonus = () => {
    window.open("https://pay.kirvano.com/75b21f3e-df7a-45d8-a985-5fe2a0e4f0e2", "_blank")
    setIsScarcityModalOpen(false)
  }

  const handleLikeClick = () => {
    setIsLiked(!isLiked)
  }

  const handlePricingButtonClick = (url: string) => {
    window.open(url, "_blank")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Orange Banner - Mantido grosso */}
      <div className="bg-orange-500 text-white px-4 py-2 text-xs flex items-center justify-center">
        <span className="text-center">Pressione ... e em seguida, abra no navegador externo</span>
      </div>

      {/* Navigation Header - Mantido como estava */}
      <div className="bg-white border-b px-4 py-2 relative">
        <div className="flex justify-center">
          <Image src="/images/privacy-logo.svg" alt="Privacy Logo" width={200} height={60} className="w-48 h-14" />
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-4">
          <Globe className="w-6 h-6 text-gray-600" />
        </div>
      </div>

      {/* Main Content - Full Mobile Width */}
      <div className="bg-white">
        {/* Hero Image - Mantido mais fino verticalmente */}
        <div className="relative">
          <Image
            src="/images/profile-hero-actual.jpeg"
            alt="Profile hero image"
            width={400}
            height={192}
            className="w-full h-48 object-cover"
          />

          {/* Stats Overlay */}
          <div className="absolute bottom-4 right-4 flex items-center gap-4 text-white text-sm font-medium">
            <div className="flex items-center gap-1">
              <Camera className="w-4 h-4" />
              <span>354</span>
            </div>
            <div className="flex items-center gap-1">
              <Video className="w-4 h-4" />
              <span>148</span>
            </div>
            <div className="flex items-center gap-1">
              <Heart className="w-4 h-4" />
              <span>20.2K</span>
            </div>
          </div>
        </div>

        {/* Profile Section - Ajustado para sobrepor */}
        <div className="px-4 pt-0 pb-4">
          {/* Profile Info - Ajustado para sobrepor */}
          <div className="flex items-start gap-3 mb-4 mt-[-60px] relative z-10">
            <Avatar className="w-28 h-28 border-2 border-white shadow-lg">
              <AvatarImage src="/images/profile-avatar-final.jpeg" />
              <AvatarFallback className="bg-orange-100 text-orange-600 font-semibold text-4xl">AN</AvatarFallback>
            </Avatar>
            <div className="flex-1 pt-16">
              <div className="flex items-center gap-2 mb-1">
                <h1 className="text-lg font-bold text-gray-900">Luana Vieira</h1>
                <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
              </div>
              <p className="text-gray-600 text-sm">@luanavieirapriv</p>
            </div>
          </div>

          {/* Bio */}
          <div className="mb-6">
            <p
              ref={bioRef}
              style={{ height: bioHeight }}
              className={`text-sm text-gray-700 mb-2 leading-relaxed overflow-hidden transition-all duration-500 ease-in-out`}
            >
              {displayedText}
            </p>
            {needsTruncation && (
              <button
                onClick={() => setShowFullBio(!showFullBio)}
                className="text-gray-500 text-sm font-medium active:text-gray-700"
              >
                {showFullBio ? "Mostrar menos" : "Mostrar mais"}
              </button>
            )}
          </div>

          {/* Social Icons */}
          <div className="flex gap-3 mb-6">
            <button
              onClick={handleLikeClick}
              className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center active:bg-orange-200 transition-colors"
            >
              <Heart className={`w-5 h-5 ${isLiked ? "text-red-500 fill-red-500" : "text-orange-500"}`} />
            </button>
            <button className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center active:bg-orange-200 transition-colors">
              <MessageCircle className="w-5 h-5 text-orange-500" />
            </button>
            <a
              href="https://www.instagram.com/luanavieirapriv"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center active:bg-orange-200 transition-colors"
            >
              <Instagram className="w-5 h-5 text-orange-500" />
            </a>
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center active:bg-orange-200 transition-colors"
            >
              <Globe className="w-5 h-5 text-orange-500" />
            </a>
          </div>

          {/* Pricing Buttons - Mobile Optimized */}
          <div className="space-y-3 mb-6">
            <Button
              onClick={() => handlePricingButtonClick("https://pay.kirvano.com/75b21f3e-df7a-45d8-a985-5fe2a0e4f0e2")}
              className="w-full bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white py-6 rounded-2xl text-base font-semibold shadow-lg active:scale-95 transition-all"
            >
              <div className="text-center">
                <div className="text-lg font-bold">Mensal</div>
                <div className="text-sm opacity-90">
                  <span className="line-through">De R$ 47,00</span> por{" "}
                  <span className="text-base font-bold">R$ 10,00</span>
                </div>
              </div>
            </Button>

            <Button
              onClick={() => handlePricingButtonClick("https://pay.kirvano.com/62eb55a6-4c97-409c-96b6-ae32f290f867")}
              className="w-full bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white py-6 rounded-2xl text-base font-semibold shadow-lg active:scale-95 transition-all"
            >
              <div className="text-center">
                <div className="text-lg font-bold">Vitalício</div>
                <div className="text-sm opacity-90">
                  <span className="line-through">De R$ 197,00</span> por{" "}
                  <span className="text-base font-bold">R$ 37,00</span>
                </div>
              </div>
            </Button>
          </div>

          {/* Content Stats */}
          <div className="flex justify-center gap-8 text-center border-t border-gray-100 pt-6 mb-6">
            <div className="flex-1">
              <div className="font-bold text-lg text-gray-900">502</div>
              <div className="text-sm text-gray-600">Posts</div>
            </div>
            <div className="flex-1">
              <div className="font-bold text-lg text-orange-500">148</div>
              <div className="text-sm text-gray-600">Vídeos</div>
            </div>
            <div className="flex-1">
              <div className="font-bold text-lg text-gray-900">354</div>
              <div className="text-sm text-gray-600">Fotos</div>
            </div>
          </div>

          {/* New Content Section: Video and Photos - Stretched Story Format */}
          <div className="space-y-4">
            {/* Video Embed - Stretched Story Format with Blur and Lock */}
            <div
              className="relative w-full h-[700px] rounded-lg overflow-hidden shadow-md cursor-pointer"
              onClick={handleMediaClick}
            >
              <iframe
                src="https://vimeo.com/1115646473?autoplay=1&muted=1&controls=0&title=0&byline=0&portrait=0&autopause=0"
                width="100%"
                height="100%"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="w-full h-full object-cover pointer-events-none blur-md"
              ></iframe>
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 z-10">
                <Lock className="w-16 h-16 text-white opacity-80" />
              </div>
            </div>

            {/* First Photo Placeholder - Stretched Story Format with Blur and Lock */}
            <div
              className="relative w-full h-[700px] rounded-lg overflow-hidden shadow-md cursor-pointer"
              onClick={handleMediaClick}
            >
              <Image
                src="/images/photo-section-1.jpeg"
                alt="Photo 1"
                width={300}
                height={700}
                className="w-full h-full object-cover blur-sm"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 z-10">
                <Lock className="w-16 h-16 text-white opacity-80" />
              </div>
            </div>

            {/* Second Photo Placeholder - Stretched Story Format with Blur and Lock */}
            <div
              className="relative w-full h-[700px] rounded-lg overflow-hidden shadow-md cursor-pointer"
              onClick={handleMediaClick}
            >
              <Image
                src="/images/photo-section-2.jpeg"
                alt="Photo 2"
                width={300}
                height={700}
                className="w-full h-full object-cover blur-sm"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 z-10">
                <Lock className="w-16 h-16 text-white opacity-80" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Floating Button */}
      <FloatingMonthlyButton />

      {/* Access Modal */}
      <AccessModal
        isOpen={isAccessModalOpen}
        onClose={handleAccessModalClose}
        onConfirm={handleAccessModalConfirm}
        onRefuse={handleAccessModalRefuse}
      />

      {/* Scarcity Modal */}
      <ScarcityModal
        isOpen={isScarcityModalOpen}
        onClose={handleScarcityModalClose}
        onConfirmBonus={handleScarcityModalConfirmBonus}
      />
    </div>
  )
}
