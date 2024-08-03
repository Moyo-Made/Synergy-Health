import { Inter } from "next/font/google";
import "./globals.css";
import SideNav from "@/components/SideNav";
import SearchBar from "@/components/SearchBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Synergy Health",
  description: "An health platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SideNav />
        <SearchBar />
        {children}
      </body>
    </html>
  );
}
