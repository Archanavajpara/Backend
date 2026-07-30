import Link from "next/link";

export default function Page() {
  return (
    <div
      style={{
        height: "100vh",
        backgroundColor:"orange",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
      }}
    >
      <h1
        style={{
          fontSize: "70px",
          color: "black",
          marginBottom: "20px",
        }}
      >
        Welcome to Lab 20
      </h1>

      <p
        style={{
          fontSize: "22px",
          marginBottom: "40px",
        }}
      >
        Basic Routing and Navigation in Next.js
      </p>

      <Link
        href="/lab20/home"
        style={{    
          backgroundColor: "#000",
          color: "#fff",
          padding: "15px 35px",
          borderRadius: "8px",
          fontSize: "20px",
          fontWeight: "bold"
        }}
      >
        Go to Layout
      </Link>
    </div>
  );
}