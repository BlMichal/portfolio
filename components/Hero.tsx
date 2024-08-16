import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="max-w-[1440px] min-h-screen-content grid lg:grid-cols-2 mx-auto">
      <div className="mt-10 lg:pb-20 lg:mt-0 md:px-10 px-2 flex flex-col justify-center z-10 ">
        <div className="bg-white rounded-2xl p-8 relative shadow-2xl">
          <div className="content-[''] absolute top-8 md:top-6 left-3 h-4/5 rounded-full w-1 bg-purple-800"></div>
          <h2 className="font-bold text-3xl pb-5">Inzeruj své věci</h2>
          <p className="max-w-xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut fuga rem
            aspernatur eligendi amet! Commodi magnam quasi, fugiat aperiam, eius
            hic in harum recusandae molestias nam atque totam dolor enim?
          </p>
          <div>
            <Link href={"/tasks"}>
              <button className="border mt-4 rounded-2xl p-4 bg-slate-500 hover:bg-slate-400 text-white">
                Pokračovat
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className=" w-full relative lg:row-span-1 row-span-5 lg:top-0 -top-1/4">
        <Image
          src="/assets/light-bulb.png"
          quality={100}
          priority
          fill
          alt="Hero light bulb image"
          className="object-contain select-none"
        />
      </div>
    </section>
  );
};

export default Hero;
