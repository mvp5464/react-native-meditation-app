import {
  View,
  Text,
  Platform,
  StatusBar,
  FlatList,
  Pressable,
  ImageBackground,
} from "react-native";
import React from "react";
import AppGradient from "@/components/AppGradient";
import { StatusBar as MyStatusBar } from "expo-status-bar";
import { MEDITATION_DATA } from "@/constants/MeditationData";
import MEDITATION_IMAGES from "@/constants/meditation-images";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";

const NatureMeditate = () => {
  return (
    <View className={` flex-1`}>
      <AppGradient colors={["#161b2e", "#0a4d4a", "#766e67"]}>
        <View
          className={`pt-[${
            Platform.OS === "android" ? Math.ceil(StatusBar.currentHeight!) : 0
          }px] mb-6`}
        >
          <Text className="text-gray-200 mb-3 font-bold text-4xl text-left">
            Welcome Me
          </Text>
          <Text className="text-indigo-100 text-xl font-medium">
            Start your meditation practice today
          </Text>
        </View>
        <View className=" mb-14">
          <FlatList // It is like map in react to render list
            data={MEDITATION_DATA}
            className=" mb-20"
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false} // To not to show scroll for images
            renderItem={({ item }) => (
              <Pressable
                onPress={() => router.push(`/meditate/${item.id}`)}
                className="h-48 my-3 rounded-md overflow-hidden"
              >
                <ImageBackground
                  source={MEDITATION_IMAGES[item.id - 1]}
                  resizeMode="cover"
                  className="flex-1 rounded-lg justify-center"
                >
                  <LinearGradient
                    colors={["transparent", "rgba(0,0,0,0.8)"]}
                    className="flex-1 justify-center items-center"
                  >
                    <Text className="text-gray-100 text-3xl font-bold text-center">
                      {item.title}
                    </Text>
                  </LinearGradient>
                </ImageBackground>
              </Pressable>
            )}
          />
        </View>
      </AppGradient>
      <MyStatusBar style="light" />
    </View>
  );
};

export default NatureMeditate;
