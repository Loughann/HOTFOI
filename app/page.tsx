import type { Metadata } from "next" // Importar o tipo Metadata
import ProfilePageClient from "./profile-page-client"

// Adicionar a exportação de metadados para definir o título da página
export const metadata: Metadata = {
  title: "Privacy Luana Vieira",
  description: "Perfil oficial de Luana Vieira na Privacy",
}

export default function ProfilePage() {
  return <ProfilePageClient />
}
