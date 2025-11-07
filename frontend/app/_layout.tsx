import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { View, StyleSheet } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { Slot } from "expo-router";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function Layout() {
	return (
		// <SafeAreaView>
		<PaperProvider>
			<SafeAreaProvider>
				<SafeAreaView style={styles.container}>
					<Header />
					<View style={styles.main}>
						<Slot />
					</View>
					<Footer />
				</SafeAreaView>
			</SafeAreaProvider>
		</PaperProvider>
		// </SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1, // 画面全体を使用
		backgroundColor: "#fff",
	},
	main: {
		flex: 1, // HeaderとFooterを除いた残り全体を自動で確保
		backgroundColor: "#f9f9f9",
	},
});
