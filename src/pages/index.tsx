import { type NextPage } from "next";
import Head from "next/head";
import { RootLayout } from "~/components/RootLayout";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sunrise</title>
        <meta name="description" content="A software development company." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <RootLayout>
        <Hero />
        {/* <Services /> */}
        {/* <Projects /> */}
        {/* <About /> */}
        {/* <Contact /> */}
      </RootLayout>
    </>
  );
};

export default Home;

const Hero = () => {
  return (
    <>
      <h1 className="font-extrabold text-black">Sunrise</h1>
      <p className="leading-relaxed text-black">
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
