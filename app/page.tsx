import type { Metadata } from "next"
import ProfilePageClient from "@/components/profile-page-client"

export const metadata: Metadata = {
  title: "Privacy Luana Vieira",
  description: "Perfil oficial de Luana Vieira na Privacy",
}

export default function ProfilePage() {
  return <ProfilePageClient />
}
