import { View } from "react-native";
import React, { useState } from "react";
import { Stack } from "expo-router";
import ExploreHeader from "@/components/ExploreHeader";
import Listings from "@/components/Listings";

const Page = () => {
  const [category, setCategory] = useState("Tiny homes");
  const onDataChanged = (category: string) => {};
  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          header: () => <ExploreHeader onCategoryChanged={onDataChanged} />,
        }}
      />
      <Listings />
    </View>
  );
};

export default Page;
