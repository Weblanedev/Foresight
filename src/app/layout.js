import "./globals.css";
import { DM_Sans } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata = {
  title: "Foresight",
  description: "Whether you're looking to rent a vehicle for a weekend getaway or purchase your dream car, we've got you covered.",
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: 'https://th.bing.com/th/id/OIP.MFIhAZiBoeVFxcKuReWySwHaHa?rs=1&pid=ImgDetMain',
        href: 'https://th.bing.com/th/id/OIP.MFIhAZiBoeVFxcKuReWySwHaHa?rs=1&pid=ImgDetMain',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: 'https://th.bing.com/th/id/OIP.MFIhAZiBoeVFxcKuReWySwHaHa?rs=1&pid=ImgDetMain',
        href: 'https://th.bing.com/th/id/OIP.MFIhAZiBoeVFxcKuReWySwHaHa?rs=1&pid=ImgDetMain',
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
