const visiMisi = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center px-6 lg:px-40 py-28">
        <h1 className="text-3xl font-bold text-center">VISI & MISI</h1>
        <div className="flex flex-col lg:flex-row py-9 justify-around gap-8 lg:gap-16 w-full">
          <div className="p-8 rounded-lg shadow-xl flex-1 max-w-lg mx-auto lg:mx-0">
            <h1 className="flex justify-center text-xl font-bold py-2">VISI</h1>
            <p className="text-center">
              OSIS SMKN 4 Bojonegoro siap mendukung menjadi SMKN 4 Bojonegoro
              unggul dalam lulusan yang berbudi pekerti luhur
            </p>
          </div>
          <div className="p-8 rounded-lg shadow-xl flex-1 max-w-lg mx-auto lg:mx-0">
            <h1 className="flex justify-center text-xl font-bold py-2">MISI</h1>
            <p className="text-center">
              Mengefektifkan program kerja OSIS, berperan dalam membentuk watak
              yang berbudi pekerti luhur, menciptakan inovasi dan kreasi dalam
              setiap kegiatan OSIS, menanamkan imtaq pada diri pengurus OSIS dan
              anggota OSIS.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default visiMisi;
