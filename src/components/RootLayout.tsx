import { Plus_Jakarta_Sans } from "next/font/google";
import localFont from "next/font/local";
import { Header } from "~/components/Header";
import { Footer } from "~/components/Footer";
import type { PropsWithChildren } from "react";

const roadster = localFont({
  src: "../../public/fonts/roadsterscript-gopgq.ttf",
  display: "block",
  preload: true,
  variable: "--font-roadster",
});
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
  display: "block",
  preload: true,
  variable: "--font-jakarta",
});

export const RootLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <main
        className={`${jakarta.variable} ${roadster.variable} min-h-screen bg-white font-sans`}
      >
        {children}
      </main>
      <Footer />
    </>
  );
};
