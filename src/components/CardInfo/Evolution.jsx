const Evolution = ({ nextStage }) => {
  return (
    <div className="p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
      <p className="text-sm font-semibold text-green-700">Tahap Evolusi:</p>
      <p className="text-lg font-bold text-green-900">
        {nextStage} {/* Tampil dari Props */}
      </p>
    </div>
  );
};

export default Evolution;