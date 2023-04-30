import { type NextPage } from "next";
import Head from "next/head";
import Web from "../../public/icons/web.svg";
import Mobile from "../../public/icons/mobile.svg";
import Design from "../../public/icons/design.svg";

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
        <Services />
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
const Services = () => {
  const Services = [
    {
      id: 1,
      icon: `${Web}`,
      title: "Websites",
      description:
        "Fast. Responsive. Accessible. We specialize in building high-performing websites without leaving any users behind. ",
    },
    {
      id: 2,
      icon: `${Mobile}`,
      title: "Mobile Apps",
      description:
        "We build cross-platform mobile apps. Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    },
    {
      id: 3,
      icon: `${Design}`,
      title: "UI/UX Design",
      description:
        "First impressions matter. We know how to craft unique and impressive digital experiences.",
    },
  ];

  return (
    <div className="container mx-auto">
      <div>
        <h2>What we can do for you</h2>
      </div>
      <div className="flex flex-row">
        {Services.map((data) => (
          <div>
            <img src={data.icon} alt="service-icon" />
            <h3 className="text-3xl">{data.title}</h3>
            <p>{data.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
// const Projects = () => {}
// const About = () => {}
// const Contact = () => {}
