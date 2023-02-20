import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import SquigglyLines from "../components/SquigglyLines";

const Home: NextPage = () => {
  return (
    <div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Head>
        <title>Enhance your old pics</title>
      </Head>

      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-28 mt-20">
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-slate-900 sm:text-7xl">
          Enhange old photos{" "}
          <span className="relative whitespace-nowrap text-[#FFBF00]">
            <SquigglyLines />
            <span className="relative">using AI</span>
          </span>{" "}
        </h1>

        <p className="mx-auto mt-12 max-w-xl text-lg text-slate-700 leading-7">
          You got old and blurry photos? Let AI restore them so those
          memories can live on.
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            className="bg-[#FFBF00] rounded-xl text-white font-medium hover:bg-black px-4 py-3 sm:mt-10 mt-8"
            href="/restore"
          >
            Restore your photos
          </Link>
        </div>
        <div className="flex justify-between items-center w-full flex-col sm:mt-10 mt-6">
          <div className="flex flex-col space-y-10 mt-4 mb-16">
            <div className="flex sm:space-x-2 sm:flex-row flex-col">
              <div>
                <h2 className="mb-1 font-medium text-lg">Original Photo</h2>
                <Image
                  alt="Original photo of my bro"
                  src="/big-lebowski.png"
                  className="w-96 h-96 rounded-2xl"
                  width={400}
                  height={400}
                />
              </div>
              <div className="sm:mt-0 mt-8">
                <h2 className="mb-1 font-medium text-lg">Restored Photo</h2>
                <Image
                  alt="Restored photo of my bro"
                  width={400}
                  height={400}
                  src="/big-lebowski-new.png"
                  className="w-96 h-96 rounded-2xl sm:mt-0 mt-2"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
