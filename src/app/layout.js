import "./globals.css";

export const metadata = {
  title: "Cardapio",
  description: "Cardapio para restaurantes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
