import CardLogo from './CardLogo';
import Evolution from './Evolution';
import TypeEffect from './TypeEffect';

// Menerima props dan meneruskannya ke komponen anak
const CardInfo = ({ pokemonName, evolution, type, weakness, logoTitle }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-2xl border-4 border-purple-400">
      <h3 className="text-2xl font-bold text-purple-700 mb-3 border-b pb-2">
        {pokemonName} Info
      </h3>
      
      {/* ➡️ Meneruskan props ke CardLogo */}
      <CardLogo cardTitle={logoTitle} /> 
      
      <div className="mt-5 space-y-4">
        {/* ➡️ Meneruskan props ke Evolution */}
        <Evolution nextStage={evolution} />
        
        {/* ➡️ Meneruskan props ke TypeEffect */}
        <TypeEffect type={type} weakness={weakness} />
      </div>
    </div>
  );
};

export default CardInfo;