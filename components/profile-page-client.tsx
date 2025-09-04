"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Globe,
  Heart,
  MessageCircle,
  Instagram,
  Camera,
  Video,
  Lock,
  Phone,
  VideoIcon,
  MoreVertical,
  ArrowLeft,
} from "lucide-react"
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

  const [isWhatsAppChatOpen, setIsWhatsAppChatOpen] = useState(false)
  const [chatStep, setChatStep] = useState(0)
  const [selectedOptions, setSelectedOptions] = useState<string[]>([])
  const [isTyping, setIsTyping] = useState(false)
  const [showUserOptions, setShowUserOptions] = useState(false)

  const chatMessages = [
    {
      text: "Oi amor! 😘 Que bom que você veio falar comigo...",
      isUser: false,
      options: ["Oi linda! 😍", "Olá gatinha! 🔥"],
      time: "14:32",
    },
    {
      text: "Você quer ver meus conteúdos mais picantes? 🔥",
      isUser: false,
      options: ["Sim, quero muito! 😈", "Claro que sim! 🥵"],
      time: "14:33",
    },
    {
      text: "Tenho uns vídeos bem safadinhos que vão te deixar louco... 💦",
      isUser: false,
      options: ["Me mostra! 🤤", "Estou ansioso! 😍"],
      time: "14:34",
    },
    {
      text: "Quer continuar nossa conversa no privado? Lá tenho muito mais para te mostrar... 😏💋",
      isUser: false,
      cta: true,
      time: "14:35",
    },
  ]

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
    window.open("https://app.kirvano.com/", "_blank")
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
    window.open("https://app.kirvano.com/", "_blank")
    setIsScarcityModalOpen(false)
  }

  const handleLikeClick = () => {
    setIsLiked(!isLiked)
  }

  const handlePricingButtonClick = () => {
    window.open("https://app.kirvano.com/", "_blank")
  }

  const handleWhatsAppClick = () => {
    setIsWhatsAppChatOpen(true)
    setChatStep(0)
    setSelectedOptions([])
    setShowUserOptions(true)
  }

  const handleChatOptionClick = (option: string) => {
    setSelectedOptions([...selectedOptions, option])
    setShowUserOptions(false)
    setIsTyping(true)

    // Simular digitação por 2 segundos
    setTimeout(() => {
      setIsTyping(false)
      setChatStep(chatStep + 1)
      if (chatStep + 1 < chatMessages.length) {
        setTimeout(() => {
          setShowUserOptions(true)
        }, 500)
      }
    }, 2000)
  }

  const handleChatCTA = () => {
    window.open("https://app.kirvano.com/", "_blank")
    setIsWhatsAppChatOpen(false)
  }

  const handleCloseChatModal = () => {
    setIsWhatsAppChatOpen(false)
    setChatStep(0)
    setSelectedOptions([])
    setIsTyping(false)
    setShowUserOptions(false)
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
            {!isWhatsAppChatOpen && (
              <div className="fixed bottom-6 right-6 z-40">
                <button
                  onClick={handleWhatsAppClick}
                  className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-2xl animate-bounce hover:animate-none hover:scale-110 transition-all duration-300"
                >
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.63z" />
                  </svg>
                </button>
                {/* Notificação de mensagem */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">1</span>
                </div>
              </div>
            )}
          </div>

          {/* Pricing Buttons - Mobile Optimized */}
          <div className="space-y-3 mb-6">
            <Button
              onClick={handlePricingButtonClick}
              className="w-full bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white py-6 rounded-2xl text-base font-semibold shadow-lg active:scale-95 transition-all"
            >
              <div className="text-center">
                <div className="text-lg font-bold">Mensal</div>
                <div className="text-sm opacity-90">
                  <span className="line-through">De R$ 49,90</span> por{" "}
                  <span className="text-base font-bold">R$ 9,90</span>
                </div>
              </div>
            </Button>

            <Button
              onClick={handlePricingButtonClick}
              className="w-full bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white py-6 rounded-2xl text-base font-semibold shadow-lg active:scale-95 transition-all"
            >
              <div className="text-center">
                <div className="text-lg font-bold">3 Meses</div>
                <div className="text-sm opacity-90">
                  <span className="line-through">De R$ 149,90</span> por{" "}
                  <span className="text-base font-bold">R$ 19,90</span>
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
                src="https://player.vimeo.com/video/1115646473?autoplay=1&muted=1&controls=0&title=0&byline=0&portrait=0&autopause=0&loop=1"
                width="100%"
                height="100%"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="w-full h-full object-cover pointer-events-none blur-sm"
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

      {isWhatsAppChatOpen && (
        <div className="fixed inset-0 bg-black z-50">
          {/* Header do WhatsApp */}
          <div className="bg-green-600 text-white px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button onClick={handleCloseChatModal}>
                <ArrowLeft className="w-6 h-6" />
              </button>
              <Avatar className="w-10 h-10">
                <AvatarImage src="/images/profile-avatar-final.jpeg" />
                <AvatarFallback>LV</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h3 className="font-medium text-white">Luana Vieira</h3>
                <p className="text-xs text-green-100">{isTyping ? "digitando..." : "online"}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <VideoIcon className="w-6 h-6" />
              <Phone className="w-6 h-6" />
              <MoreVertical className="w-6 h-6" />
            </div>
          </div>

          {/* Background do chat */}
          <div
            className="flex-1 px-4 py-6 overflow-y-auto"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23075e54' fillOpacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundColor: "#e5ddd5",
              minHeight: "calc(100vh - 120px)",
            }}
          >
            {/* Mensagens do chat */}
            <div className="space-y-2">
              {chatMessages.slice(0, chatStep + 1).map((message, index) => (
                <div key={index}>
                  {/* Mensagem do usuário (resposta selecionada) */}
                  {selectedOptions[index] && (
                    <div className="flex justify-end mb-2">
                      <div className="bg-green-500 text-white px-3 py-2 rounded-lg rounded-br-none max-w-xs shadow-sm relative">
                        <p className="text-sm">{selectedOptions[index]}</p>
                        <div className="flex items-center justify-end gap-1 mt-1">
                          <span className="text-xs opacity-70">14:3{index + 2}</span>
                          <svg className="w-4 h-4 opacity-70" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                          </svg>
                          <svg className="w-4 h-4 opacity-70" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Mensagem da Luana */}
                  <div className="flex justify-start">
                    <div className="bg-white text-gray-900 px-3 py-2 rounded-lg rounded-bl-none max-w-xs shadow-sm">
                      <p className="text-sm">{message.text}</p>
                      <div className="flex justify-end mt-1">
                        <span className="text-xs text-gray-500">{message.time}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Indicador de digitação */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white px-4 py-3 rounded-lg rounded-bl-none shadow-sm">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Área de input/opções */}
          <div className="bg-gray-100 px-4 py-3 border-t">
            {showUserOptions && chatStep < chatMessages.length && !isTyping && (
              <div className="space-y-2">
                {chatMessages[chatStep]?.cta ? (
                  <Button
                    onClick={handleChatCTA}
                    className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-full font-medium text-sm"
                  >
                    Continuar conversa 💋
                  </Button>
                ) : (
                  chatMessages[chatStep]?.options?.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleChatOptionClick(option)}
                      className="w-full text-left p-3 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-sm shadow-sm"
                    >
                      {option}
                    </button>
                  ))
                )}
              </div>
            )}
            {!showUserOptions && !isTyping && chatStep >= chatMessages.length && (
              <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 border">
                <input
                  type="text"
                  placeholder="Digite uma mensagem..."
                  className="flex-1 outline-none text-sm"
                  disabled
                />
                <button className="text-green-500">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
      )}

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
