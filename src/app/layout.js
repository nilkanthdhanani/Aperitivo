import { Inter } from "next/font/google";
import "@/app/globals.scss";
import "@/assets/styles/main.scss";
import "@/assets/styles/partials/_theming.scss";
import "react-loading-skeleton/dist/skeleton.css";
import Footer from "@/common/footer";
import Header from "@/common/header";
import TopButton from "@/components/topButton";
// import CustomCursor from "@/components/CustomCursor";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Apéritivo | Buy Cocktails Online, Buy Spirits Online",
  description: "Buy Cocktails Online, Buy Spirits Online",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./favicon.ico" />
      </head>
      <body className={inter.className}>
        {/* <CustomCursor /> */}
        <Header />
        {children}
        <Footer />
        <TopButton />
      </body>
    </html>
  );
}
