export default function Dashboard() {
  return (
    <div
      style={{
        minHeight: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightblue",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "40px",
          borderRadius: "15px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          textAlign: "center",
          maxWidth: "500px",
        }}
      >
        <h1
          style={{
            color: "#0077b6",
            marginBottom: "20px",
            fontSize: "40px",
          }}
        >
          Home Page
        </h1>

        <p
          style={{
            color: "#555",
            fontSize: "18px",
            lineHeight: "1.6",
          }}
        >
          Hello! Please Login Yourself
        </p>
      </div>
    </div>
  );
}