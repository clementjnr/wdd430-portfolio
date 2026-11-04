import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "My Portfolio | WDD 430",
  description: "A responsive portfolio showcasing web development projects and skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="site-shell">
          <Header />
          <div className="site-main">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
