import "./globals.css";

export const metadata = {
  title: "Go Mail Pilot | Professional Business Email Hosting",
  description:
    "Secure, fast, and affordable business email hosting with daily backups, free SSL, and instant setup starting at ₹249/month.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
