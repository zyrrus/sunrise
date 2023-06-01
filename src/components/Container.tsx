import React, { type PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  component?: keyof React.ReactHTML; // | React.ReactNode; ?
}

export const Container: React.FC<Props> = ({ component, children }) => {
  const Comp = component ?? "div";

  return <Comp className="container">{children}</Comp>;
};
