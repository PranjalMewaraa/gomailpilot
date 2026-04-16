import "./globals.css";

export const metadata = {
  title: "A2z Mail Hosting | Professional Business Email Hosting",
  description:
    "Secure, fast, and affordable business email hosting by A2z Cloud with daily backups, free SSL, 24/7 WhatsApp support, and plans starting at ₹249/month.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
