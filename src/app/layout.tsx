import type { Metadata } from "next";
import "@/app/globals.css";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/constants/site";
import { AuthContextProvider } from "@/app/_layout/provider/AuthProvider";

import { Header } from "@/app/_layout/header";
import { Main } from "@/app/_layout/Main";
import { Footer } from "@/app/_layout/footer";
import { Container } from "@/app/_layout/container";

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
        url: "/og/og.png",
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
