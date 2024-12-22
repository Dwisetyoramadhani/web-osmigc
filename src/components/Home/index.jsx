import Image from "next/image";
import VisiMisi from "./visiMisi";
import FeaturedPost from "../Blog/FeaturedPost";
import RecentPost from "../Blog/RecentPost";

const Home = () => {
  return (
    <>
      <div
        className="relative flex flex-col items-center justify-center h-screen bg-cover bg-center"
        style={{ backgroundImage: "url(/assets/smk.svg)" }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>

        <div className="flex flex-col text-center text-white z-10 px-4">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Organisasi Siswa Intra Sekolah
          </h1>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold py-2">
            SMK Negeri 4 Bojonegoro
          </h1>
          <h1 className="text-sm md:text-base lg:text-xl">
            Selamat Datang Di Website Resmi OSIS SMKN 4 Bojonegoro
          </h1>
          <div>
            <button className="p-3 my-3 bg-blue-600 rounded-xl text-sm md:text-base lg:text-lg">
              Masa Bhakti 2024-2025
            </button>
          </div>
        </div>
      </div>
      <VisiMisi />
      <FeaturedPost />
      <RecentPost />
    </>
  );
};

export default Home;
