import { Slot } from "expo-router";
import Header from "@/app/components/Header";
import { View } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";

export default function Layout() {
	return (
		<PaperProvider>
			<View style={{ flex: 1 }} className="bg-black">
				<Header />
				<Slot />
			</View>
		</PaperProvider>
	);
}
