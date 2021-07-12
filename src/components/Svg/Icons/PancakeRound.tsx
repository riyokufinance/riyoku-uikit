import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 160 160" {...props}>
      <image width={160} height={160} href="/images/egg/9.png"/>
    </Svg>
  );
};

export default Icon;
