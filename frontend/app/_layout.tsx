import { Slot } from "expo-router";
import Header from "@/app/components/Header";
import { View } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Layout() {
	return (
		// <SafeAreaView>
		<PaperProvider>
			<View style={{ flex: 1 }} className="bg-black">
				<Header />
				<Slot />
			</View>
		</PaperProvider>
		// </SafeAreaView>
	);
}
