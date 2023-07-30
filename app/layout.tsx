import "./globals.css";
// import { Analytics } from "@vercel/analytics/react";
import localFont from "next/font/local";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

// Fonts Poly Sans Pro
const myFont = localFont({
  src: [
    {
      path: "../public/Fonts/PolySans-Bulky.woff2",
      weight: "500",
      style: "medium",
    },
    {
      path: "../public/Fonts/PolySans-Neutral.woff2",
      weight: "900",
      style: "black",
    },
  ],
});

export const metadata = {
  title: "Kumordzi kelvin",
  description:
    "A front-end Web developer and UI/UX designer.The co-founder of Webncos Agency",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        <Navbar />
        {children}
        {/* <Footer /> */}
        {/* <Analytics /> */}
      </body>
    </html>
  );
}
