// Menerima prop 'type' dan 'weakness'
const TypeEffect = ({ type, weakness }) => {
  return (
    <div className="p-3 bg-yellow-50 rounded-lg border-r-4 border-yellow-500">
      <p className="font-semibold text-gray-700">Tipe: <span className="text-yellow-700 font-extrabold">{type}</span></p>
      <p className="text-sm text-gray-500 mt-1">Kelemahan: 
        <span className="font-medium text-red-500 ml-1">{weakness}</span> {/* Tampil dari Props */}
      </p>
    </div>
  );
};

export default TypeEffect;