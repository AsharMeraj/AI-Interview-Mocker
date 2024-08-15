import type { Metadata } from "next";
import { Mulish, Montserrat, Baloo_Bhai_2, Poppins } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "./dashboard/_components/Header";
import { Toaster } from "@/components/ui/sonner";
import NextTopLoader from "nextjs-toploader";

const inter = Mulish({ subsets: ["latin"], weight: '500' });

export const metadata: Metadata = {
  title: "AI Interview Mocker",
  description: "Generated by create next app",
};

const clerkPubKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY as string;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <html lang="en">
        <body className={inter.className}>
          <NextTopLoader
            color="#c90000"
            height={2}
            shadow={'0 0 0 0'}
            speed={500}
            showSpinner={false}
          />
          <Toaster className="text-lg"/>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
