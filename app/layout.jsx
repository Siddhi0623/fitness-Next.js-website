import "./globals.css";

export const metadata = {
  title: "PulseFit Coaching | Personal Fitness Training",
  description:
    "Professional fitness coaching website for strength, mobility, transformation plans, and WhatsApp lead booking.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
