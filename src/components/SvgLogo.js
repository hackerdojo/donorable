const React = require("react");
import {SvgUri} from 'react-native-svg';

export default function SvgLogo({source, width = "100%"}) {

  return (
    <SvgUri
      uri={source}
      width={width}
    />
  )
}

