// pages/_app.tsx
import "../styles/globals.css";
import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* full-screen gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700" />

      {/* page content container */}
      <div className="relative flex justify-center py-16 px-4">
        <Component {...pageProps} />
      </div>
    </>
  );
}
