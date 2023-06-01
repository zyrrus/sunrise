import React from "react";
import { cva } from "class-variance-authority";

const button = cva([
  "flex flex-row items-center gap-x-2 rounded-full px-6 py-4",
  "text-r-lg font-semibold text-black",
  "bg-sunrise shadow-md",
  "hover:bg-sunrise/80",
]);

interface Props {
  children?: React.ReactNode;
  onClick?: () => void;
  href?: string;
}

export const Button: React.FC<Props> = ({ children, onClick, href }) => {
  const Wrapper = href ? "a" : "button";

  return (
    <Wrapper className={button()} href={href} onClick={onClick}>
      {children}
    </Wrapper>
  );
};
