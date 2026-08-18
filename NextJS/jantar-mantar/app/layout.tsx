import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "NextJS Lab",
  description: "NextJS Lab Practicals",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif" }}>
        <div style={{ display: "flex", minHeight: "100vh" }}>
          
          <aside
            style={{
              width: "220px",
              background: "#1e293b",
              color: "white",
              padding: "20px",
            }}
          >
            <h2>NextJS Labs</h2>
            <hr />

            <ul style={{ listStyle: "none", padding: 0 }}>
              <li style={{ margin: "15px 0" }}>
                <Link
                  href="/lab20"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Lab 20
                </Link>
              </li>

              <li style={{ margin: "15px 0" }}>
                <Link
                  href="/lab21"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Lab 21
                </Link>
              </li>

              <li style={{ margin: "15px 0" }}>
                <Link
                  href="/lab22_1"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Lab 22_1
                </Link>
              </li>

              <li style={{ margin: "15px 0" }}>
                <Link
                  href="/lab22_2"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Lab 22_2
                </Link>
              </li>

               <li style={{ margin: "15px 0" }}>
                <Link
                  href="/Lab25/mock_crud"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Lab 25
                </Link>
              </li>

              <li style={{ margin: "15px 0" }}>
                <Link
                  href="/Lab26/mysql"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Lab 26
                </Link>
              </li>
            </ul>
          </aside>

          {/* Main Content */}
          <main style={{ flex: 1, padding: "30px" }}>{children}</main>
        </div>
      </body>
    </html>
  );
}