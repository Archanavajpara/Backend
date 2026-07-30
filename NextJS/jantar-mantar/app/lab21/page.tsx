import Link from "next/link";

export default function Lab21() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "lightpink",
      }}
    >
      <h1>Lab 21 - HTML/CSS Templates</h1>

      <div style={{ display: "flex", gap: "20px", marginTop: "30px" }}>
        <Link href="/lab21/template1" style={{color:"black",height:"50px",fontWeight:"1000",
        width:"80px",textAlign:"center",justifyContent:"center",paddingTop:"10px"
        }}>Templates</Link>
        
      </div>
    </div>
  );
}