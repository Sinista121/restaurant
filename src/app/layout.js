import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "Restaurant Savory",
  description: "A restaurant management app!",
};

export default function RootLayout({ children }) {
  useEffect(() => {
    document.body.classList.add(inter.className);
    return () => {
      document.body.classList.remove(inter.className);
    };
  }, []);

  return (
    <html lang="en">
      <body className={rubik.className}>{children}</body>
    </html>
  );
}
