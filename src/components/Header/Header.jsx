import Logo from './Logo'; // BARIS BARU: Import komponen Logo

export default function Header() {
  return (
    <header className="p-4 bg-white shadow">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Logo /> // Panggilan tetap sama
          <h1 className="font-bold text-xl">Pokedex</h1>
        </div>
      </div>
    </header>
  );
}