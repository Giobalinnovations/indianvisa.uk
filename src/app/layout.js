import Footer from '@/components/india/common/Footer';
import Header from '@/components/india/common/Header';
import ReactQueryProvider from '@/components/ReactQueryProvider';
import { FormProvider } from '@/context/formContext';

import { Plus_Jakarta_Sans, Poppins } from 'next/font/google';
import 'react-datepicker/dist/react-datepicker.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata = {
  title: 'Home',
  description: 'Visa Application',
  metadataBase: new URL(process.env.NEXT_PUBLIC_DOMAIN_URL),
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.className} flex flex-col min-h-screen antialiased bg-background`}
      >
        <FormProvider>
          <ReactQueryProvider>
            <div className="z-50 bg-gradient-to-r from-primary/90 to-secondary/90 text-white">
              <Header />
            </div>
            <div className="fixed inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5 pointer-events-none"></div>
            <div className="relative z-10">
              <main className="flex-1 container mx-auto px-4 relative">
                <div className="absolute inset-0 bg-white/40 backdrop-blur-sm rounded-lg my-4"></div>
                <div className="relative">{children}</div>
              </main>
              <Footer />
              <ToastContainer
                position="bottom-right"
                autoClose={4000}
                hideProgressBar={false}
                closeOnClick
                pauseOnHover
                theme="colored"
              />
            </div>
          </ReactQueryProvider>
        </FormProvider>
      </body>
    </html>
  );
}
