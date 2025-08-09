import type { Metadata } from "next"
import AgeGateWrapper from "./age-gate-wrapper" // Importar o novo wrapper

export const metadata: Metadata = {
  title: "Privacy Luana Vieira",
  description: "Perfil oficial de Luana Vieira na Privacy",
}

export default function HomePage() {
  return <AgeGateWrapper />
}
