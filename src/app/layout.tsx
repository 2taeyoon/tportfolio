import type { Metadata } from "next";
import "@/style/pretendard.css";
import "@/style/global.css";
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: "TY Portfolio",
  description: "2taeyoon의 포트폴리오 페이지입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <meta name="color-scheme" content="light dark"/>
        <meta name="supported-color-schemes" content="dark"/>
				<link rel="icon" type="image/png" sizes="192x192"  href="/favicon/favicon-192x192.png"/>
				<link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png"/>
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
				<link rel="shortcut icon" type="image/x-icon" href="/favicon.ico"/>
				<link rel="icon" href="/favicon.ico" title="icon"/>
      </head>
      <body>
				{children}	
        <Analytics />
      </body>
    </html>
  );
}
