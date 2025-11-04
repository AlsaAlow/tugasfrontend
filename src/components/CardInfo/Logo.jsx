// Menerima prop 'cardTitle'
const CardLogo = ({ cardTitle }) => {
  return (
    <div className="text-center p-2">
      <h4 className="text-lg font-bold text-red-600 bg-red-100 px-4 py-1 rounded-full inline-block">
        {cardTitle} {/* Tampil dari Props */}
      </h4>
    </div>
  );
};

export default CardLogo;