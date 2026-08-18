import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Student Management",
  description: "Student CRUD Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily: "Arial, sans-serif",
          backgroundColor: "#f4f7fb",
        }}
      >
        <header
          style={{
            backgroundColor: "#2563eb",
            color: "white",
            padding: "20px 40px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          <h1 style={{ margin: 0 }}>🎓 Student Management System</h1>
          <p style={{ margin: "5px 0 0" }}>
            Manage your students easily
          </p>
        </header>

        <main
          style={{
            maxWidth: "1000px",
            margin: "40px auto",
            padding: "0 20px",
          }}
        >
          {children}
        </main>

        <footer
          style={{
            textAlign: "center",
            padding: "20px",
            marginTop: "50px",
            backgroundColor: "#1e293b",
            color: "white",
          }}
        >
          Student Management System © 2026
        </footer>
      </body>
    </html>
  );
}