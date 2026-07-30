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
        Welcome to Lab 22
      </h1>

      <p
        style={{
          fontSize: "22px",
          marginBottom: "40px",
        }}
      >
        Route Grouping in Next.js
      </p>

    </div>
  );
}