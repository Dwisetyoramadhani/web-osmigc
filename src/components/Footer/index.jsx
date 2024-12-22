"use client";
import {
  InstagramLogo,
  MapPin,
  TiktokLogo,
  TwitterLogo,
  YoutubeLogo,
} from "@phosphor-icons/react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="flex flex-col lg:flex-row py-9 bg-blue-500 px-6 lg:px-40 gap-6 lg:gap-16">
          <div className="flex flex-col text-white lg:flex-1">
            <h1 className="text-xl font-bold py-2">Informasi</h1>
            <p className="text-sm lg:text-base">
              OSIS SMK Negeri 4 Bojonegoro merupakan Organisasi Siswa Intra
              Sekolah yang memiliki tujuan untuk memajukan SMK Negeri 4
              Bojonegoro dalam ruang akademis dan nonakademis dengan berbagai
              macam pendekatan.
            </p>
            <div className="flex flex-row gap-2 items-center py-4">
              <MapPin
                size={32}
                className="bg-white p-1 text-black font-bold rounded-md"
              />
              <p className="text-sm lg:text-base">
                Jl. Raya Surabaya Bojonegoro, Kecamatan Kapas, Kabupaten
                Bojonegoro, Jawa Timur.
              </p>
            </div>
            <div className="flex flex-row gap-5">
              <Link href="#">
                <InstagramLogo size={26} />
              </Link>
              <Link href="#">
                <TwitterLogo size={26} />
              </Link>
              <Link href="#">
                <TiktokLogo size={26} />
              </Link>
              <Link href="#">
                <YoutubeLogo size={26} />
              </Link>
            </div>
          </div>
          <div className="lg:flex-1">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4257.4773012117475!2d111.90545187531961!3d-7.180644792824359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e77810651b96081%3A0xf1720c99ff09edce!2sSMKN%204%20Bojonegoro!5e1!3m2!1sen!2sid!4v1734835752802!5m2!1sen!2sid"
              width="100%"
              height="250"
              className="rounded-lg shadow-lg"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center bg-blue-500 p-4 text-white text-xs">
          <p>
            Copyright © 2024 OSMIGC By{" "}
            <a href="https://github.com/Dwisetyoramadhani">Tyoramadhani</a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
