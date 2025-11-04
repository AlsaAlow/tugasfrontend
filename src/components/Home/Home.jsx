import Search from './Home/Search';
import CardInfo from './CardInfo/CardInfo';

const Home = () => {
  // Data yang akan dikelola dan dikirim ke komponen anak
  const dataMonster = {
    // Data untuk Search
    searchButtonText: 'CARI MONSTER',
    
    // Data untuk CardInfo
    name: 'Jigglypuff',
    evolutionStage: 'Wigglytuff',
    monsterType: 'Normal / Fairy',
    monsterWeakness: 'Poison, Steel',
    cardLogoText: 'Kartu Info Dasar'
  };

  return (
    <div className="py-8 px-4 bg-gray-100">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
        Area Pencarian Pokemon
      </h2>
      
      {/* ➡️ Meneruskan 'searchButtonText' props ke Search */}
      <Search buttonText={dataMonster.searchButtonText} />
      
      <div className="max-w-lg mx-auto mt-8">
        {/* ➡️ Meneruskan semua data yang dibutuhkan sebagai props ke CardInfo */}
        <CardInfo 
          pokemonName={dataMonster.name} 
          evolution={dataMonster.evolutionStage}
          type={dataMonster.monsterType}
          weakness={dataMonster.monsterWeakness}
          logoTitle={dataMonster.cardLogoText}
        />
      </div>
    </div>
  );
};

export default Home;