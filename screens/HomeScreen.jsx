import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { Text, Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronDownIcon, SparklesIcon } from "react-native-heroicons/outline"
export default function HomeScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])
  return (
    <SafeAreaView className="">
      <View className="bg-slate-200 flex-row pb-3 items-center mx-4 space-x-2">
        <Image source={require("../assets/favicon.png")} className="w-7 h-7 p-4 rounded-full bg-white" />
        <View>
          <Text className="text-sm text-gray-400">
            Deliver Now!
          </Text>


          <Text className="font-bold text-lg">
            Current Location
            <ChevronDownIcon size={30} color="#00CCBB" />
          </Text>
        </View>
      </View>
    </SafeAreaView>
  )
}
