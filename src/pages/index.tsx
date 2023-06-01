import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Container } from "~/components/Container";
import { Polaroid } from "~/components/Polaroid";
import { ProjectDescription } from "~/components/ProjectDescription";
import { projects } from "~/constants/projects";

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
        <Projects />
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
      <div className="absolute min-h-full w-full">
        <div className="absolute mt-[20vh] h-[17vh] w-full">
          <Image
            src="/images/ribbon.webp"
            alt="Sunrise background banner"
            className="scale-pixelated"
            fill
          />
          {/* TODO: Create + replace with .svg */}
          <Image
            src="/images/sunrise-display.png"
            alt="Sunrise Software"
            className="object-contain py-2"
            fill
          />
        </div>
        <Container component="section">
          <h1 className="py-3 font-roadster text-5xl text-black">Sunrise</h1>
          <p className="leading-relaxed text-black lg:text-xl">
            Creating software that looks and works great is our specialty at
            Sunrise. Our team of experts combines artistry and technical
            know-how to craft solutions that will make your business{" "}
            <span className="font-semibold text-orange">shine</span>.
          </p>
        </Container>
      </div>
      <div className="h-screen" />
    </>
  );
};

// const Services = () => {}

const Projects = () => {
  return (
    <Container component="section">
      <h2 className="my-10 text-center font-extrabold text-black text-r-2xl md:mt-16">
        Here are some of our past projects
      </h2>
      <div className="pb-20 [&>*:nth-child(odd)]:md:flex-row">
        {projects.map((p) => (
          <div
            key={p.title}
            className="mb-10 flex flex-col items-center gap-x-12 gap-y-6 md:flex-row-reverse lg:my-0"
          >
            <div>
              <Polaroid
                title={p.title}
                imageSrc={p.imageSrc}
                rotation={p.rotation}
              />
            </div>
            <div>
              <ProjectDescription title={p.title} color={p.color}>
                {p.children}
              </ProjectDescription>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

// const About = () => {}
// const Contact = () => {}
