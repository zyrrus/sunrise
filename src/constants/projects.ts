import type { Props as PolaroidProps } from "~/components/Polaroid";
import type { Props as ProjectDescriptionProps } from "~/components/ProjectDescription";

export const projects: Array<PolaroidProps & ProjectDescriptionProps> = [
  {
    title: "Parallel",
    color: "bg-orange",
    imageSrc: "https://picsum.photos/seed/Parallel/200",
    rotation: "-rotate-12",
    children:
      "We started Parallel to help connect educators with content creators to make it easier to create high-quality educational content for platforms like YouTube. We built the platform with high performance, scalability, and accessibility in mind. That's why we chose powerful tools like Next.js, TailwindCSS, RadixUI, Prisma, PlanetScale, and Vercel's hosting platform. ",
  },
  {
    title: "DropNote",
    color: "bg-yellow",
    imageSrc: "https://picsum.photos/seed/DropNote/200",
    rotation: "rotate-6",
    children:
      "We started Parallel to help connect educators with content creators to make it easier to create high-quality educational content for platforms like YouTube. We built the platform with high performance, scalability, and accessibility in mind. That's why we chose powerful tools like Next.js, TailwindCSS, RadixUI, Prisma, PlanetScale, and Vercel's hosting platform. ",
  },
  {
    title: "Flurry Waitlist",
    color: "bg-green",
    imageSrc: "https://picsum.photos/seed/Flurry/200",
    rotation: "-rotate-3",
    children:
      "We started Parallel to help connect educators with content creators to make it easier to create high-quality educational content for platforms like YouTube. We built the platform with high performance, scalability, and accessibility in mind. That's why we chose powerful tools like Next.js, TailwindCSS, RadixUI, Prisma, PlanetScale, and Vercel's hosting platform. ",
  },
];
