import { useCallback } from "react";
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from "expo-font";
import { Poppins_400Regular, Poppins_500Medium } from '@expo-google-fonts/poppins';

const useLoadFonts = () => {
    const [fontsLoaded] = useFonts({
        'Poppins_Regular': Poppins_400Regular,   
        'Poppins_Medium': Poppins_500Medium
      });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
          await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    return { fontsLoaded, onLayoutRootView };
}

export default useLoadFonts;