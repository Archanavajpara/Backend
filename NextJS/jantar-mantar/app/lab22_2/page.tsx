import Link from "next/link";

export default function Lab22_2() {
  return (
    <div style={{backgroundColor:"Skyblue",height:"79vh",padding:"50px"}}>
    <div>
      <h1>Lab 22.2 - Dynamic Routes</h1>

      <ul>
        <li style={{fontSize:"18px"}}>
          <Link href="/lab22_2/student/101">
            Student ID Example
          </Link>
        </li>
        <br />
        <li style={{fontSize:"18px"}}>
          <Link href="/lab22_2/prime/10/40">
            Prime Number Example
          </Link>
        </li>
        <br />
        <li style={{fontSize:"18px"}}>
          <Link href="/lab22_2/records/3">
            Pagination Example
          </Link>
        </li>
      </ul>
    </div>
    </div>
  );
}