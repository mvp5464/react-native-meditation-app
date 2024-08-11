import {
  View,
  Text,
  ImageBackground,
  Pressable,
  Platform,
  StatusBar,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import { GalleryPreviewData } from "@/constants/models/AffirmationCategory";
import AFFIRMATION_GALLERY from "@/constants/affirmation-gallery";
import AppGradient from "@/components/AppGradient";
import AntDesign from "@expo/vector-icons/AntDesign";

const AffirmationPractice = () => {
  const { itemId } = useLocalSearchParams(); // To get the params when clicked
  const [affirmation, setAffirmation] = useState<GalleryPreviewData>();
  const [sentences, setSentences] = useState<string[]>([]);

  useEffect(() => {
    for (let idx = 0, len = AFFIRMATION_GALLERY.length; idx < len; idx++) {
      const affirmationsData = AFFIRMATION_GALLERY[idx].data;
      const affirmationToStart = affirmationsData.find(
        (a) => a.id === Number(itemId)
      );
      if (affirmationToStart) {
        setAffirmation(affirmationToStart);

        const affirmationArray = affirmationToStart.text.split(".");

        if (affirmationArray[affirmationArray.length - 1] === "") {
          affirmationArray.pop();
        }
        setSentences(affirmationArray);

        return;
      }
    }
  }, []);

  return (
    <View className="flex-1">
      <ImageBackground
        source={affirmation?.image}
        resizeMode="cover"
        className="flex-1"
      >
        <AppGradient colors={["rgba(0,0,0,0.3)", "rgba(0,0,0,0.9)"]}>
          <View
            className={`pt-[${
              Platform.OS === "android"
                ? Math.ceil(StatusBar.currentHeight!)
                : 0
            }px] mb-6`}
          >
            <Pressable onPress={() => router.back()}>
              <AntDesign name="leftcircleo" size={50} color="white" />
            </Pressable>
            <ScrollView className="mt-20" showsVerticalScrollIndicator={false}>
              <View className="h-full justify-center">
                <View className="h-4/5 justify-center">
                  {sentences?.map((sentence, idx) => (
                    <Text
                      key={idx}
                      className="text-white text-3xl mb-12 font-bold text-center"
                    >
                      {sentence}.
                    </Text>
                  ))}
                </View>
              </View>
            </ScrollView>
          </View>
        </AppGradient>
      </ImageBackground>
    </View>
  );
};

export default AffirmationPractice;
