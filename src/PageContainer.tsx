import React from "react";

type Props = {
  children: React.ReactNode;
};

export const PageContainer = ({ children }: Props) => {
  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        width: "100%",
        flex: 1,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ flex: 1 }}>{children}</div>
    </div>
  );
};
