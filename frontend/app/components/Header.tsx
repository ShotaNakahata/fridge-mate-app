import { View, Text } from "react-native";

export default function Header() {
	return (
		<View className="flex flex-row bg-black p-4 justify-between items-center ">
			<Text className="text-white text-lg font-bold">冷蔵庫App</Text>
		</View>
	);
}
