// src/app/layout.js

import "./globals.css";
import NavBar from "@/navBar"; // Import NavBar globally

export const metadata = {
  title: "React Box App",
  description: "An app to dynamically add and remove boxes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {/* NavBar should be OUTSIDE the container to span full width */}
        <NavBar />

        {/* Main Content Area */}
        <main className="container mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}
