import React, {useState} from "react";
import {View, Text} from 'react-native';

const LegalScreen = () => {
  return (
  <View>
    <Text>Legal</Text>
    <Text numberOfLines={10000}>
      react-native-maps:
      Copyright (c) 2017 Airbnb

      Licensed under the The MIT License (MIT) (the "License");
      you may not use this file except in compliance with the License.
      You may obtain a copy of the License at

      https://raw.githubusercontent.com/airbnb/react-native-maps/master/LICENSE

      Unless required by applicable law or agreed to in writing, software
      distributed under the License is distributed on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      See the License for the specific language governing permissions and
      limitations under the License.
    </Text>
  </View>
  )
}

export default LegalScreen;
