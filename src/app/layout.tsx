import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DebtLift | Clear Your UK Credit Cards Faster",
  description: "Get a personalized, step-by-step clearance strategy for your UK credit card debt.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#080e18] text-slate-100 min-h-screen antialiased selection:bg-[#34d399] selection:text-[#080e18]">
        {children}
      </body>
    </html>
  );
}