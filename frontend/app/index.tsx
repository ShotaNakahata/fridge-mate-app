import { View } from "react-native";
import {
	Text,
	Button,
	ButtonText,
	Input,
	InputField,
} from "@gluestack-ui/themed";

export default function Index() {
	return (
		<View className="flex-1 items-center justify-center bg-white">
			{/* NativeWind クラスが効いているかテスト */}
			<Text className="text-2xl font-bold text-blue-500 mb-6">
				✅ Gluestack + NativeWind Test
			</Text>

			{/* Gluestack の Input */}
			<Input className="mb-4 w-60">
				<InputField placeholder="Type something..." />
			</Input>

			{/* Gluestack の Button */}
			<Button onPress={() => alert("pushed")}>
				<ButtonText>Press Me</ButtonText>
			</Button>
		</View>
	);
}
