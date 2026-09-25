import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata={title:"MŪNA | Skaistuma studija Limbažos",description:"Skaistumkopšanas procedūras Limbažos."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="lv"><body>{children}</body></html>}