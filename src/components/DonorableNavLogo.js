import React from "react";
import {View} from "react-native";
import DonorableLogo from "./DonorableLogo";

const DonorableNavLogo = () => {
  return (
    <View
      style={{paddingLeft: 15, paddingBottom: 6, backgroundColor: 'white'}}
    >
      <DonorableLogo width={100}/>
    </View>
  )
}
export default DonorableNavLogo;
