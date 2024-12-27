import { Jost } from "next/font/google";
import "./globals.css";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});


export const metadata = {
  title: "Roy Waswa",
  description: "I am a photographer based in Nairobi Kenya. I specialize in portraiture and commercial photography",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${jost.variable} antialiased`}
      >
        <main>
        {children}</main>
      </body>
    </html>
  );
}
