import React from "react";
import {View} from "react-native";
import DonorableLogo from "./DonorableLogo";


const DonorableNavLogo = () => {
  return (
    <View
      style={{paddingTop:15, paddingLeft:10, backgroundColor:'white'}}>
      <DonorableLogo width={100} />
    </View>
  )
}
export default DonorableNavLogo;
