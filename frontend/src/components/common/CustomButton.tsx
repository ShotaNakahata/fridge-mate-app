import * as React from "react";
import { Button } from "react-native-paper";
import type { StyleProp, ViewStyle, TextStyle } from "react-native";

type Props = {
	label: string;
	onPress?: () => void;
	mode?: "text" | "outlined" | "contained";
	buttonStyle?: StyleProp<ViewStyle>;
	contentStyle?: StyleProp<ViewStyle>;
	labelStyle?: StyleProp<TextStyle>;
	icon?: string;
	disabled?: boolean;
};

export default function CustomButton({
	label,
	onPress,
	mode = "outlined",
	buttonStyle,
	contentStyle,
	labelStyle,
	icon,
	disabled = false,
}: Props) {
	return (
		<Button
			mode={mode}
			onPress={onPress}
			icon={icon}
			disabled={disabled}
			style={[
				{
					alignSelf: "flex-start", // ← 横幅をテキストに合わせる
					borderWidth: mode === "outlined" ? 1 : 0,
					borderColor: "#1677ff",
					borderRadius: 6,
					backgroundColor: mode === "contained" ? "#1677ff" : "white",
					alignItems: "center",
					justifyContent: "center",
				},
				buttonStyle,
			]}
			contentStyle={[
				{
					paddingVertical: 4,
					paddingHorizontal: 5, // ← 適度な内側余白
					flexShrink: 1,
					justifyContent: "center",
					// minHeight: 40,
				},
				contentStyle,
			]}
			labelStyle={[
				{
					fontSize: 14,
					lineHeight: 16,
					fontWeight: "600",
					color: mode === "contained" ? "white" : "#1677ff",
					textAlign: "center",
					flexShrink: 0,
				},
				labelStyle,
			]}
		>
			{label}
		</Button>
	);
}
