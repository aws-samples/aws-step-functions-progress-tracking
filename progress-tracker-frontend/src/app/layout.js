import "./app.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const metadata = {
  title: "Step Functions progress tracking",
  description: "Step Functions progress tracking sample",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
