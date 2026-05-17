import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WTFat — AI roast platform for Gen Z",
  description:
    "WTFat turns the things you already feel guilty about — what you ate, what you wore, what you spent — into hilariously brutal AI roasts. Built for the audience that hates being lectured.",
  metadataBase: new URL("https://wtfat.app"),
  openGraph: {
    title: "WTFat — AI roast platform for Gen Z",
    description:
      "The AI roast platform Gen Z screenshots and shares. Live on Telegram.",
    type: "website",
    url: "/",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "WTFat — AI roast platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WTFat — AI roast platform for Gen Z",
    description:
      "The AI roast platform Gen Z screenshots and shares. Live on Telegram.",
    images: ["/og.png"],
  },
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='.9em' font-size='90'%3E%F0%9F%90%BC%3C/text%3E%3C/svg%3E",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-ink antialiased">{children}</body>
    </html>
  );
}
