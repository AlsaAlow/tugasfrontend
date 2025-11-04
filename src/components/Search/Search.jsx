// Menerima prop baru 'buttonText'
const Search = ({ buttonText }) => {
  return (
    <div className="max-w-md mx-auto mb-6 p-4 bg-white rounded-lg shadow-lg flex items-center">
      <input
        type="text"
        defaultValue="Ketik nama monster..." // Default value
        className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />
      {/* Tombol menampilkan teks dari Props */}
      <button className="ml-3 bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-150 shadow-md">
        {buttonText} 
      </button>
    </div>
  );
};

export default Search;