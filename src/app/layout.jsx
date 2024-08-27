// app/layout.jsx

import "@styles/globals.css";
import Header from "@components/common/header/Header.jsx";
import Footer from "@components/common/footer/Footer";
import imageO from "../app/opengraph-image.png";
import { AuthContextProvider } from "@context/AuthContext";
import { CourseContextProvider } from "@context/CourseContext";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata = {
  title: "trafy - Your Personalised AI mentor",
  description:
    "Learn UI/UX designing, artificial intelligence, and digital marketing with our interactive courses and accelerate your career with expert guidance",
  metadataBase: new URL("https://trafyai.com/"),
  openGraph: {
    title: "trafy - Your Personalised AI mentor",
    description:
      "Learn UI/UX designing, artificial intelligence, and digital marketing with our interactive courses and accelerate your career with expert guidance",
  },
  twitter: {
    card: "summary_large_image",
  },
  image: imageO,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>

      <body>
   
        {/* End Google Tag Manager (noscript) */}

        <AuthContextProvider>
          <CourseContextProvider>
            <main className="app">
              <Header />
              {children}
              <Footer />
            </main>
          </CourseContextProvider>
        </AuthContextProvider>
      </body>
      <GoogleAnalytics gaId="GTM-NX8D4BFD" />

    </html>
  );
}
