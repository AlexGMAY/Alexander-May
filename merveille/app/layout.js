import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  // variable: "--font-geist-sans",
  subsets: ["latin"], weight:['400', '500', '600', '700'],
});

const ovo = Ovo({
  // variable: "--font-geist-mono",
  subsets: ["latin"], weight:['400'],
});

export const metadata = {
  title: "Merveille Alexandre",
  description: "Fullstack Developer and Analyst Programmer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${outfit.className} ${ovo.className} antialiased bg-background dark:bg-darkBackground text-gray-900 dark:text-gray-100`}
      >
        {children}
      </body>
    </html>
  );
}
