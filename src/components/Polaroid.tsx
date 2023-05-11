import Image from "next/image";

export interface Props {
  title: string;
  imageSrc: string;
  rotation: string;
}

export const Polaroid: React.FC<Props> = ({ title, imageSrc, rotation }) => {
  return (
    <div
      className={`m-5 w-52 rounded bg-[#F8F2EA] text-black shadow-md sm:w-64 lg:w-80 ${rotation}`}
    >
      <div className="flex h-full w-full flex-col items-center justify-between gap-y-3 p-4 sm:gap-y-4 sm:p-5 lg:gap-y-5 lg:p-6">
        <div className="relative aspect-square w-full">
          <Image
            src="https://picsum.photos/200"
            alt={`Showcase of ${title}`}
            fill
            className="object-cover shadow-inner"
          />
        </div>
        <span className="text-2xl font-semibold">{title}</span>
      </div>
    </div>
  );
};
