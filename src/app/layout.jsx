import "@styles/globals.css";
import Header from "@components/common/header/Header.jsx";
import Footer from "@components/common/footer/Footer";
import imageO from "../app/opengraph-image.png";
import { AuthContextProvider } from "@context/AuthContext";
import { CourseContextProvider } from "@context/CourseContext";
import { CartProvider } from "@context/CartContext";
import Script from "next/script";
import { GoogleAnalytics } from '@next/third-parties/google'


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
      <head>
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-NX8D4BFD');`
        }}
      />
      
          </head>
      <body>



        <AuthContextProvider>
          <CartProvider>
            <main className="app">
              <Header />
              {children}
              <Footer />
            </main>
            <GoogleAnalytics gaId="G-THWZDJH6WZ" />
          </CartProvider>
        </AuthContextProvider>
      </body>
     
  

    </html>
  );
}



