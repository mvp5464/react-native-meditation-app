import { View, Text, Platform, ScrollView } from "react-native";
import React from "react";
import AppGradient from "@/components/AppGradient";
import { StatusBar } from "react-native";
import AFFIRMATION_GALLERY from "@/constants/affirmation-gallery";
import GuidedAffirmationsGallery from "@/components/GuifedAffirmationsGallery";

const Affirmations = () => {
  return (
    <View className="flex-1">
      <AppGradient colors={["#2e1f58", "#54426b", "#a790af"]}>
        <View
          className={`pt-[${
            Platform.OS === "android" ? Math.ceil(StatusBar.currentHeight!) : 0
          }px] mb-6`}
        >
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text className="text-zinc-50 text-3xl font-bold">
              Change your beliefs with affirmations
            </Text>
            <View>
              {AFFIRMATION_GALLERY.map((g) => (
                <GuidedAffirmationsGallery
                  key={g.title}
                  title={g.title}
                  previews={g.data}
                />
              ))}
            </View>
          </ScrollView>
        </View>
      </AppGradient>
    </View>
  );
};

export default Affirmations;
