/* eslint-disable react/no-unescaped-entities */
import Footer from "@/components/footer";
// import Image from "next/image";

export default function Home() {
  return (
    <main className=" mt-10 px-10 lg:px-14 pb-10 lg:mb-0 ">
      <section className="mt-24 border-2 px-10 border-gray-500">
        <div className="pb-20">
          <h1 className="text-5xl lg:text-7xl pt-3 bg-gradient-to-r from-gray-400 to-gray-300 bg-clip-text text-transparent">
            I'm Kelvin Kumordzi{" "}
          </h1>
          <ul className="text-xl text-gray-300 mt-5 list-disc">
            <li>Front-end web Developer</li>
            <li>UI/UX designer</li>
          </ul>
        </div>
        {/* second section */}
        <div className="flex justify-between flex-col  lg:flex-row text-gray-300 ">
          <div className="w-auto lg:w-96 my-8">
            <h2 className="text-2xl lg:text-4xl ">
              I build Modern, and Effective websites that increase Customer
              Engagement, and have intuitive Digital Designs.Exceptional designs
              are my priority.
            </h2>
          </div>
          <div className="my-8 w-56">
            <p className="text-xl">
              Born in 2002 in Accra-Ghana.A computer Science major and a tech
              enthusiast.I am not your usual artist with a paint brush in my
              hand scribbling lines and connecting dots but i can design.I am
              pursuing new expressions through experiments and thoughts.
            </p>
          </div>
        </div>

        <Footer />
      </section>
    </main>
  );
}
