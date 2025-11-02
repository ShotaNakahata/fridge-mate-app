import { View } from "react-native";
import { Appbar } from "react-native-paper";
import Select from "@/src/components/forms/Select";

export default function Header() {
	return (
		<Appbar.Header style={{ backgroundColor: "#a0f8be", padding: 12 }}>
			{/* <Appbar.Content title="Title" /> */}
			<View style={{ flex: 1 }}>
				<Select
					placeholder="冷蔵庫"
					menuStyle={{ backgroundColor: "#f0fff4" }} // Menu全体
					itemStyle={{ color: "#006d32", fontSize: 15 }} // Optionの見た目
					buttonStyle={{ width: "58%" }}
					buttonLabelStyle={{ margin: 0, padding: 0 }}
				/>
			</View>
			<Appbar.Action icon="magnify" onPress={() => {}} />
		</Appbar.Header>
	);
}
