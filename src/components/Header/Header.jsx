export default function Header() {
  return (
    <header className="p-4 bg-white shadow">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Logo />
          <h1 className="font-bold text-xl">Pokedex</h1>
        </div>
      </div>
    </header>
  );
}

function Logo() {
  return <div className="w-10 h-10 bg-gray-200 rounded flex items-center justify-center">Logo</div>;
}
