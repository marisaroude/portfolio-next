import { Onest } from "next/font/google";
import "./globals.css";
import "swiffy-slider/css"

const inter = Onest({ subsets: ["cyrillic"], weight: '500' });

export const metadata = {
  title: "Marisa Roude | Developer",
  description: "Portfolio by create next app",
  icons: {
    icon: "/favicon/favicon.png",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-gradient-to-r from-zinc-900 via-stone-600 to-zinc-900">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
