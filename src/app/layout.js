import "./globals.css";
import { Providers } from "./providers"; // ✅ Now this file exists

export const metadata = {
  title: "Todo App",
  description: "A simple Todo App with Redux Toolkit in Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
