import React, { useCallback} from "react"; // react library
import { Provider } from 'react-redux'
import  * as SplashScreen from "expo-splash-screen";
import { useFonts,  loadAsync } from "expo-font";
import store from './src/app/store'
import { decode, encode } from "base-64";
import AppNavigation from "./src/navigation/AppNavigation"; // for the decode and encode of the text

if (!global.btoa) {
  global.btoa = encode;
} // encodes to Base64
if (!global.atob) {
  global.atob = decode;
} // decodes from Base64

SplashScreen.preventAutoHideAsync();

export default function  App() {

  // Import custom fonts
  const [fontsLoaded] = useFonts({
    'Montserrat_400Regular': require ('./assets/fonts/Montserrat_400Regular.ttf'),
    'Montserrat_900Black': require ('./assets/fonts/Montserrat_900Black.ttf'),
    'Whitney-Medium':  require('./assets/fonts/Whitney-Medium.ttf')
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  alert("App render")

  // Routes & Navigation of different screens
  return (
    <Provider store={store}>
      <AppNavigation onReady={onLayoutRootView}/>
    </Provider>
  );
}
