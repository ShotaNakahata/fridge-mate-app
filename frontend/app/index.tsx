import { View, Text } from "react-native";
import { Button, Card } from "react-native-paper";

export default function Index() {
	return (
		<View className="flex-1 justify-center items-center bg-gray-100 p-4">
			<Card style={{ width: "90%", padding: 16 }}>
				<Text className="text-xl font-bold mb-4">冷蔵庫App</Text>
				<Button mode="contained" onPress={() => console.log("clicked!")}>
					食材を追加
				</Button>
			</Card>
		</View>
	);
}
