import Navbar from "@/components/navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/footer";
import ToastProvider from "@/utils/toast.provider";
import { StoreInitializer } from "../stores/initializer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wy Blog",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreInitializer initialStore={{}}>
          <ToastProvider>
            <div
              className="flex flex-col min-h-screen bg-cover bg-center w-%90 bg-no-repeat"
              style={{
                backgroundImage: 'url("https://picsum.photos/1600/900")',
              }}
            >
              <Navbar />
              <div className="flex-1 flex flex-col ">{children}</div>
              <Footer />
            </div>
          </ToastProvider>
        </StoreInitializer>
      </body>
    </html>
  );
}
