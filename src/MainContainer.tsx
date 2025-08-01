import React from "react";

type Props = {
  children: React.ReactNode;
};

export const MainContainer = ({ children }: Props) => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ flex: 1 }}>{children}</div>
    </div>
  );
};
