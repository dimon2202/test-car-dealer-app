export async function generateStaticParams() {
    return [];
  }
  
  export default async function ResultPage({ params }) {
    const { makeId, year } = await params;

    const res = await fetch(
      `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`
    );
    const data = await res.json();
  
    if (!data.Results || data.Results.length === 0) {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h1 className="text-2xl font-bold">No models found for the selected make and year.</h1>
          <p>Please try again with different selections.</p>
          <a
            href="/"
            className="px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600"
          >
            Back to Home
          </a>
        </div>
      );
    }
  
    const makeName = data.Results[0]?.Make_Name || "Unknown Make";
  
    return (
      <div className="flex flex-col items-center justify-center min-h-screen space-y-6">
        <h1 className="mt-8 text-2xl font-bold">
          Models for {makeName} in {year}
        </h1>
        <ul className="flex flex-wrap justify-center gap-4 px-4">
          {data.Results.map((model, index) => (
            <li
              key={index}
              className="px-4 py-2 border rounded bg-gray-100 hover:bg-gray-200"
            >
              {model.Model_Name}
            </li>
          ))}
        </ul>
        <a
          href="/"
          className="px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          Back to Home
        </a>
      </div>
    );
  }
 