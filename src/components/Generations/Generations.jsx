import Gen1 from "./gen1";
import Gen2 from "./gen2";
import Gen3 from "./Gen3";
import Gen4 from "./Gen4";

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
