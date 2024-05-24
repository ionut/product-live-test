import "./globals.css";
import { Navbar } from "./ui/navbar/Navbar";
import { Footer } from "./ui/footer/Footer";
import Script from "next/script";

export const metadata = {
  title: "Finistress",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <Script
          strategy="beforeInteractive"
          src="https://www.digistore24.com/trusted-badge/28193/4XDQ6WUo0Ahcube/salespage"
        />
      </head>
      <body>
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
