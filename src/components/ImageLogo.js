const React = require("react");
const {Image} = require("react-native");

export default function ImageLogo({source, width = "100%"}) {


  return (
    <Image
      source={source}
      style={{width: width}}
      resizeMode={"contain"}
    />
  )
}

