export default async function RecordPage({ params }:{params:Promise<{pageNo:Number}>}) {
  const { pageNo } = await params;

  const page = Number(pageNo);

  const recordsPerPage = 10;

  const startIndex = (page - 1) * recordsPerPage + 1;
  const endIndex = page * recordsPerPage;

  return (
    <div>
      <h1>Pagination</h1>

      <h2>Page Number : {page}</h2>

      <p>Start Record : {startIndex}</p>

      <p>End Record : {endIndex}</p>
    </div>
  );
}