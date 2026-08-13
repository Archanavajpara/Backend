export default async function StudentPage({params}:{params:Promise<{id:String}>}) {
  const { id } = await params;

  return (
    <div>
      <h1>Student ID</h1>

      <h2>ID : {id}</h2>
    </div>
  );
}