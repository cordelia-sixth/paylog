import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "./_layout/footer";
import { Header } from "./_layout/header";
import { Container } from "./_layout/container";

import { Main } from "./_layout/Main";
import { AuthContextProvider } from "./_layout/provider/AuthProvider";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/constants/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  title: SITE_NAME,
  description: SITE_DESCRIPTION,

  // openGraph
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: "/og/og_image.png",
      },
    ],
    locale: "ja-JP",
    type: "website",
  },

  // X
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <AuthContextProvider>
          <Container>
            <Header />
            <Main>{children}</Main>
            <Footer />
          </Container>
        </AuthContextProvider>
      </body>
    </html>
  );
}
