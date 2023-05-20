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
        <Services />
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

const Services = () => {
  const Services = [
    {
      id: 1,
      icon: "web.svg",
      borderColor: "border-orange/20",
      title: "Websites",
      description:
        "Fast. Responsive. Accessible.\nWe specialize in building high-performing websites without leaving any users behind. ",
    },
    {
      id: 2,
      icon: "mobile.svg",
      borderColor: "border-green/20",
      title: "Mobile Apps",
      description:
        "We build cross-platform mobile apps. Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    },
    {
      id: 3,
      icon: "design.svg",
      borderColor: "border-red/20",
      title: "UI/UX Design",
      description:
        "First impressions matter. We know how to craft unique and impressive digital experiences.",
    },
  ];

  return (
    <div className="my-10 bg-sand">
      <Container>
        <div>
          <h2 className="text-center font-extrabold text-r-2xl sm:text-left">
            What we can do for you
          </h2>
        </div>
        <div className="flex flex-col sm:flex-col md:flex-row">
          {Services.map((data) => (
            <div
              key={data.id}
              className="my-2 flex w-full flex-col items-center justify-start sm:w-1/3"
            >
              <Image
                src={`icons/${data.icon}`}
                alt="service-icon"
                width={150}
                height={150}
              />
              <h3 className="font-semibold text-r-xl">{data.title}</h3>
              <div className={`my-5 w-3/4 border-2 ${data.borderColor}`} />
              {data.description.split("\n").map((line) => (
                <p key={line} className="w-3/4 text-center text-r-base">
                  {line}
                </p>
              ))}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

const Projects = () => {
  return (
    <Container>
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
