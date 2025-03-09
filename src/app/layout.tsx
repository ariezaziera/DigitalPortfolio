import "./globals.css";
import Navbar from "@/components/Navbar";
import { Montserrat } from "next/font/google";

const montSans = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "My Portfolio",
  description: "A digital portfolio built with Next.js & Tailwind CSS",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${montSans.className} bg-[#0E0D0E] text-white`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
