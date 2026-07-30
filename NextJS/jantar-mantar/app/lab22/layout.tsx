import Link from "next/link";

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      <nav
        style={{
          backgroundColor: "#1f2937",
          padding: "15px 40px", //15px from 
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
        }}
      >
        <Link
          href="/lab22/admin"
          style={{
            color: "white",
            textDecoration: "none",
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          Admin
        </Link>

        <Link
          href="/lab22/about"
          style={{
            color: "white",
            textDecoration: "none",
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          Auth
        </Link>

        <Link
          href="/lab22/contact"
          style={{
            color: "white",
            textDecoration: "none",
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          Client
        </Link>
      </nav>

      <div
        style={{
          padding: "40px",
          textAlign: "center",
        }}
      >
        {children}
      </div>

      <footer
        style={{
          backgroundColor: "#1f2937",
          color: "white",
          textAlign: "center",
          padding: "15px",
          marginTop: "40px",
        }}
      >
        Auth Page
      </footer>
    </div>
  );
}