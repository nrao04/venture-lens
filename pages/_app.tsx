// pages/_app.tsx
import "../styles/globals.css";
import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700
                 flex items-center justify-center p-6"
    >
      <Component {...pageProps} />
    </div>
  );
}