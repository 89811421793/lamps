import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "./components/Footer";
import Header from "./components/Header";


// Подключаем шрифты Montserrat
const montserratRegular = localFont({
  src: "./fonts/Montserrat-Regular.woff",
  variable: "--font-montserrat-regular",
  weight: "400", // Regular
});

const montserratMedium = localFont({
  src: "./fonts/Montserrat-Medium.woff",
  variable: "--font-montserrat-medium",
  weight: "500", // Medium
});

const montserratSemibold = localFont({
  src: "./fonts/Montserrat-Semibold.woff",
  variable: "--font-montserrat-semibold",
  weight: "600", // Semibold
});

const montserratBold = localFont({
  src: "./fonts/Montserrat-Bold.woff",
  variable: "--font-montserrat-bold",
  weight: "700", // Bold
});

const montserratExtraBold = localFont({
  src: "./fonts/Montserrat-ExtraBold.woff",
  variable: "--font-montserrat-extrabold",
  weight: "800", // ExtraBold
});

const montserratLight = localFont({
  src: "./fonts/Montserrat-Light.woff",
  variable: "--font-montserrat-light",
  weight: "300", // Light
});

export const metadata: Metadata = {
  title: "Lamps",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="ru">
      <body className={`${montserratRegular.variable} ${montserratMedium.variable} ${montserratSemibold.variable} ${montserratBold.variable} ${montserratExtraBold.variable} ${montserratLight.variable} antialiased`}>
        <Header/>
               {children}
      <Footer/>
      </body>
    </html>
  
  );
}
