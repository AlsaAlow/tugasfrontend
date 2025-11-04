export default function Generations() {
  return (
    <section className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Generations</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Gen1 /> <Gen2 /> <Gen3 /> <Gen4 />
      </div>
    </section>
  );
}

function Gen1(){ return <div className="p-4 border rounded">Gen 1</div> }
function Gen2(){ return <div className="p-4 border rounded">Gen 2</div> }
function Gen3(){ return <div className="p-4 border rounded">Gen 3</div> }
function Gen4(){ return <div className="p-4 border rounded">Gen 4</div> }
