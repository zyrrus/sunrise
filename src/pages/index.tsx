import { cva, cx } from "class-variance-authority";
import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "~/components/Button";
import { Container } from "~/components/Container";
import { Polaroid } from "~/components/Polaroid";
import { ProjectDescription } from "~/components/ProjectDescription";
import { projects } from "~/constants/projects";
import { MdArrowCircleDown } from "react-icons/md";

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

const ribbon = cva("relative w-full transition-all duration-500", {
  variants: {
    state: {
      ribbon: "h-40 top-[20vh]",
      sunrise: "h-[95vh] top-[5vh]",
    },
  },
});

const Hero = () => {
  // Transform ribbon into sunrise on scroll
  const [showSunrise, setShowSunrise] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const showSunriseThreshold_vh = 5;
      const showSunriseThreshold_px =
        (window.innerHeight * showSunriseThreshold_vh) / 100;

      setShowSunrise(window.pageYOffset > showSunriseThreshold_px);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="relative min-h-screen w-full">
        <div className="flex flex-col items-center">
          <div className="absolute inset-0 -z-10">
            <div
              className={ribbon({ state: showSunrise ? "sunrise" : "ribbon" })}
            >
              <Image
                src="/images/ribbon.webp"
                alt="Sunrise background banner"
                className={cx(
                  "transition-all duration-500",
                  showSunrise ? "" : "shadow-lg scale-pixelated"
                )}
                fill
              />
            </div>
          </div>
          <div className="relative mt-[20vh] h-40 w-full">
            {/* TODO: Create + replace with .svg */}
            <Image
              src="/images/sunrise-display.png"
              alt="Sunrise Software"
              className="object-contain px-4 py-2"
              fill
            />
          </div>
          <p className="mb-8 mt-5 max-w-xl text-center leading-relaxed text-black text-r-lg sm:mb-20 sm:mt-8 md:max-w-2xl lg:mb-32 lg:mt-11 2xl:max-w-4xl">
            Creating software that looks and works great is our specialty at
            Sunrise.
            <br />
            Our team of experts combines artistry and technical know-how to
            craft solutions that will make your business{" "}
            <span className="font-semibold text-orange">shine</span>.
          </p>
          {/* TODO: Make functional + more interesting */}
          <Button>
            Check out our work <MdArrowCircleDown size="1.25em" />
          </Button>
        </div>
        <div className="absolute bottom-0 w-full">
          <div className="md: relative h-16 w-full sm:h-20 md:h-32 xl:h-56 2xl:h-72">
            <Image src="/images/sand-top-1.svg" alt="sand" fill />
          </div>
        </div>
      </div>
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
