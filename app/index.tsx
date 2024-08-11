import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import React from "react";
import { StatusBar as MyStatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";

import beachImage from "@/assets/meditation-images/beach.webp";
import CustomButton from "@/components/CustomButton";
import { useRouter } from "expo-router";
import AppGradient from "@/components/AppGradient";
// import beachImage from "../assets/meditation-images/beach.webp";
// import beachImage from "@/constants/meditation-images";

const App = () => {
  //   console.log(
  //     `pt-[${
  //       Platform.OS === "android" ? Math.floor(StatusBar.currentHeight!) : 0
  //     }px]`
  //   );
  const router = useRouter();
  return (
    <View className="flex-1">
      <ImageBackground
        source={beachImage}
        resizeMode="cover"
        className="flex-1"
      >
        <AppGradient colors={["rgba(0,0,0,0.4)", "rgba(0,0,0,0.8)"]}>
          <SafeAreaView
            // className="pt-[37px]" // WHY IT IS GIVING ERRORS
            className={`pt-[${
              Platform.OS === "android"
                ? Math.ceil(StatusBar.currentHeight!)
                : 0
            }px] flex-1 px-1 justify-between`}
          >
            <View>
              <Text className="text-center text-white font-bold text-4xl">
                Simple Meditation
              </Text>
              <Text className="text-center text-white text-2xl mt-3 ">
                Simplifing Meditation for Everyone
              </Text>
            </View>
            <View>
              <CustomButton
                onPress={() => router.push("/nature-meditate")}
                title={"Get Started"}
              />
            </View>
            <MyStatusBar
              style="light" /*This will make status bar text and icon color white*/
            />
          </SafeAreaView>
        </AppGradient>
      </ImageBackground>
    </View>
  );
};

export default App;
