import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import { Providers } from "./components/Providers";
import MainNav from './components/MainNav';
import Footer from './components/Footer';

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "RE:RE: Uploaded",
    template: "%s - RE:RE: Uploaded",
  },
  description: "RE:RE:RE:RE:RE: Uploaded",
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={`${geistMono.variable} antialiased`}>
        <Providers>
          <div id="app-container" className="relative flex flex-col min-h-screen">
            <MainNav />
            <div className="mx-auto py-4 px-6 flex-grow flex w-full">
              {children}
            </div>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
