import React, { FC } from "react";

interface Props {
  children: React.ReactNode;
}


const DarkLayout: FC<Props> = ({children}) => {
  return (
    <div
      style={{
        backgroundColor: "rgba(0,0,0,0.3)",
        borderRadius: "5px",
        padding: "20px",
      }}
    >
      <div>{children}</div>
    </div>
  );
};

export default DarkLayout;
