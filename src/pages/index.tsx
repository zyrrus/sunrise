import { type NextPage } from "next";
import Head from "next/head";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
  display: "block",
  preload: true,
  variable: "--font-jakarta",
});

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sunrise</title>
        <meta name="description" content="A software development company." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${jakarta.variable} bg-white font-sans`}>
        <h1 className="font-extrabold text-black">Sunrise</h1>
        <p className="leading-relaxed text-black">
          Creating software that looks and works great is our specialty at
          Sunrise. Our team of experts combines artistry and technical know-how
          to craft solutions that will make your business{" "}
          <span className="font-semibold text-orange">shine</span>.
        </p>
      </main>
    </>
  );
};

export default Home;

// const Hero = () => {}
// const Services = () => {}
// const Projects = () => {}
// const About = () => {}
// const Contact = () => {}
