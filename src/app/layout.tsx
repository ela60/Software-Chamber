

import "./globals.css";
import { Bricolage_Grotesque } from "next/font/google";


const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["500"], 
  variable: "--font-bricolage",
  display: "swap",
});

export const metadata = {
  title: "Software Chamber",
  description: "Your App Description",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={bricolage.variable}>
      <body>{children}</body>
    </html>
  );
}
