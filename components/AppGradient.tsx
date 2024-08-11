import { View, Text, SafeAreaView, Platform, StatusBar } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const AppGradient = ({
  children,
  colors,
  className,
}: {
  children: any;
  colors: string[];
  className?: string;
}) => {
  return (
    <LinearGradient colors={colors} className="flex-1">
      <SafeAreaView
        className="flex-1 px-5 py-3"
        // className={`pt-[${
        //   Platform.OS === "android" ? Math.ceil(StatusBar.currentHeight!) : 0 // THIS pt-[] WON'T WORK IN whole children= why??
        // }px] flex-1 px-5 py-3 `}
      >
        {/* <View
          className={`pt-[${
            Platform.OS === "android" ? Math.ceil(StatusBar.currentHeight!) : 0 // THIS pt-[] WON'T WORK IN SafeAreaView
          }px]  ${className}`}
        > */}
        {children}
        {/* </View> */}
      </SafeAreaView>
    </LinearGradient>
  );
};

export default AppGradient;
