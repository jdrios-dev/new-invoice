import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "New Invoice",
  description:
    "Create and manage invoices online with Invoice Master, the ultimate invoicing solution for small businesses and freelancers. Invoice Master lets you generate professional invoices, track your invoice numbers, clients, and payments, and send reminders and receipts with ease. Try it for free today and simplify your invoicing process.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
