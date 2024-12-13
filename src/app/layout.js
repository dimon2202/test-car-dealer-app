import "./globals.css";

export const metadata = {
  title: 'Car Dealer App',
  description: 'Filter and view vehicles by make and model year.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">{children}</body>
    </html>
  );
}
