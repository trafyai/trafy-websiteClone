import "@styles/globals.css";
import Header from "@components/common/header/Header.jsx";
import Footer from "@components/common/footer/Footer";
import imageO from "../app/opengraph-image.png";
import { AuthContextProvider } from "@context/AuthContext";

export const metadata = {
  title: {
    default: "trafy",
  },
  description:
    "Learn UI/UX designing, artificial intelligence, and digital marketing with our interactive courses and accelerate your career with expert guidance",
  metadataBase: new URL("https://trafyai.com/"),
  openGraph: {
    title: "trafy",
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
        <AuthContextProvider>
          <main className="app">
            <Header />
            {children}
            <Footer />
          </main>
        </AuthContextProvider>
        <script
          dangerouslySetInnerHTML={{
            __html: `
           
                (function(h,o,t,j,a,r){
                    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                    h._hjSettings={hjid:5066235,hjsv:6};
                    a=o.getElementsByTagName('head')[0];
                    r=o.createElement('script');r.async=1;
                    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                    a.appendChild(r);
                })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
       
            `,
          }}
        />
      </body>
    </html>
  );
}
