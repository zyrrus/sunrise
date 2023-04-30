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
      <Nav />
      <h1 className="py-3 font-roadster text-5xl text-black">Sunrise</h1>
      <p className="leading-relaxed text-black">
        Creating software that looks and works great is our specialty at
        Sunrise. Our team of experts combines artistry and technical know-how to
        craft solutions that will make your business{" "}
        <span className="font-semibold text-orange">shine</span>.
      </p>
    </>
  );
};
const Nav = () => {
  const Links = [
    { id: 1, title: "Services" },
    { id: 2, title: "Projects" },
    { id: 3, title: "About" },
    { id: 4, title: "Contact" },
  ];

  return (
    <div className="flex h-[100px] w-full flex-row items-center justify-around">
      <div className="flex flex-row items-center">
        <img src="icons/sun-full.svg" />
        <h3 className="h-full px-3 font-roadster text-[32px]">Sunrise</h3>
      </div>
      <nav className="flex list-none flex-row">
        {Links.map((link) => (
          <li className="px-5">
            <a className="text-[20px] font-extrabold">{link.title}</a>
          </li>
        ))}
      </nav>
    </div>
  );
};
// const Services = () => {}
// const Projects = () => {}
// const About = () => {}
// const Contact = () => {}
