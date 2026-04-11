import { Abril_Fatface, Lora, Montserrat } from "next/font/google";
import Header from "@/src/components/modules/Header";
import "./globals.css";

const abrilFatface = Abril_Fatface({
  weight: "400",
  variable: "--font-abril",
  subsets: ["latin"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Bárbaro | Barbershop",
  description: "Donde el estilo alcanza la elegancia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${abrilFatface.variable} ${lora.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground">
        <Header />
        {children}
      </body>
    </html>
  );
}
