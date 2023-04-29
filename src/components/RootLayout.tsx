import { Plus_Jakarta_Sans } from "next/font/google";
import { Header } from "~/components/Header";
import { Footer } from "~/components/Footer";
import type { PropsWithChildren } from "react";

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
      <main className={`${jakarta.variable} min-h-screen bg-white font-sans`}>
        {children}
      </main>
      <Footer />
    </>
  );
};
