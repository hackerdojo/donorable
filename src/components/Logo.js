import DonorableLogo from "./DonorableLogo";

const React = require("react");
import {SvgLogo} from "./SvgLogo";

export default function Logo({source, type = "image", width = "100%", height = "100%"}) {

  return (
    <DonorableLogo width={width} height={height} source={source}/>
  )
}

