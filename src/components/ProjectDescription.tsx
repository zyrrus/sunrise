import * as Separator from "@radix-ui/react-separator";

export interface Props {
  title: string;
  color: string;
  children?: React.ReactNode;
}

export const ProjectDescription: React.FC<Props> = ({
  title,
  color,
  children,
}) => {
  return (
    <div className="max-w-4xl text-black">
      <h3 className="text-3xl font-semibold">{title}</h3>
      <Separator.Root
        className={`${color} my-2 h-1 w-full rounded-full`}
        decorative
      />
      <p className="text-base leading-relaxed md:text-lg lg:text-xl">
        {children}
      </p>
    </div>
  );
};
