const React = require("react");
const {Image} = require("react-native");

export default function Logo({source,styles}) {
  return (
      <Image
        source={source}
        style={styles.fullWidth}
        resizeMode={"contain"}
      />
  )
}

