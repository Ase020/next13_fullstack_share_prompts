import "@styles/global.css";
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "aseDesign Incite Prompts",
  description: "Discover and share AI prompts",
  icons: {
    icon: {
      url: "/logo.svg",
    },
    shortcut: { url: "/logo.svg" },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">{children}</main>
      </body>
    </html>
  );
}
