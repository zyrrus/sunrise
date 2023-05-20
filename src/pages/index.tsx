import { type NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sunrise</title>
        <meta name="description" content="A software development company." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <Hero />
        <div className="">
          <p className="text-r-3xl">48px: h1</p>
          <p className="text-r-2xl">40px: h2</p>
          <p className="text-r-xl">32px: h3</p>
          <p className="text-r-lg">24px: h4, header, polaroid, button</p>
          <p className="text-r-base">20px: h5, body</p>
          <p className="text-r-sm">16px: h6</p>
        </div>
        {/* <Services /> */}
        {/* <Projects /> */}
        {/* <About /> */}
        {/* <Contact /> */}
      </>
    </>
  );
};

export default Home;

const Hero = () => {
  return (
    <>
      <h1 className="py-3 font-roadster text-black text-r-3xl">Sunrise</h1>
      <p className="leading-relaxed text-black text-r-xl">
        Creating software that looks and works great is our specialty at
        Sunrise. Our team of experts combines artistry and technical know-how to
        craft solutions that will make your business{" "}
        <span className="font-semibold text-orange">shine</span>.
      </p>
    </>
  );
};
// const Services = () => {}
// const Projects = () => {}
// const About = () => {}
// const Contact = () => {}
