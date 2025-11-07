import { View, StyleSheet } from "react-native";
import { Appbar } from "react-native-paper";
import Select from "@/src/components/forms/Select";
import { colors } from "@/src/theme/colors";

export default function Header() {
	const fridgeOptions = ["冷蔵庫1", "Bさんの冷蔵庫", "要らない物", "その他"];
	return (
		<Appbar.Header style={{ backgroundColor: "#a0f8be", padding: 12 }}>
			{/* <Appbar.Content title="Title" /> */}
			<View style={{ flex: 1 }}>
				<Select
					placeholder="冷蔵庫"
					menuStyle={{ backgroundColor: "#f0fff4" }} // Menu全体
					itemStyle={{ color: "#006d32", fontSize: 15 }} // Optionの見た目
					buttonStyle={{ width: "58%", borderRadius: 40, minHeight: 30 }}
					buttonLabelStyle={{ margin: 0, padding: 0 }}
					options={fridgeOptions}
				/>
			</View>
			<Appbar.Action icon="magnify" onPress={() => {}} />
		</Appbar.Header>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.themeColor,
	},
});
