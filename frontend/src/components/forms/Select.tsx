import * as React from "react";
import { Menu } from "react-native-paper";
import type { ViewStyle, TextStyle } from "react-native";
import CustomButton from "@/src/components/common/CustomButton";

type Props = {
	placeholder?: string; // プレースホルダー文字（初期表示）
	menuStyle?: ViewStyle; // メニュー全体のスタイル
	itemStyle?: TextStyle; // 各項目（Option）の文字スタイル
	buttonStyle?: ViewStyle; // ボタン外枠のスタイル
	buttonContentStyle?: ViewStyle; // ボタン内側（paddingなど）のスタイル
	buttonLabelStyle?: TextStyle; // ボタン文字のスタイル
};

export default function Select({
	placeholder = "選択してください",
	menuStyle,
	itemStyle,
	buttonStyle,
	buttonContentStyle,
	buttonLabelStyle,
}: Props) {
	const [visible, setVisible] = React.useState(false);
	const [selected, setSelected] = React.useState(placeholder);

	const options = ["Option A", "Option B", "Option C", "Option D"];

	return (
		<Menu
			visible={visible}
			onDismiss={() => setVisible(false)}
			anchor={
				<CustomButton
					label={selected}
					onPress={() => setVisible(true)}
					buttonStyle={[
						{
							alignSelf: "flex-start", // ✅ ボタン幅を文字に合わせる
							borderColor: "#1677ff",
							borderWidth: 1,
							borderRadius: 6,
							backgroundColor: "white",
						},
						buttonStyle,
					]}
					contentStyle={[
						{
							paddingVertical: 4,
							paddingHorizontal: 10,
						},
						buttonContentStyle,
					]}
					labelStyle={[
						{
							fontSize: 14,
							color: "#1677ff",
							fontWeight: "600",
							textAlign: "center",
							// flexShrink: 1, // ✅ テキスト折り返し防止
						},
						buttonLabelStyle,
					]}
				/>
			}
			contentStyle={[
				{
					backgroundColor: "white",
					borderRadius: 8,
					minWidth: 180,
					marginTop: 10,
					marginLeft: 1,
					elevation: 6, // Androidで浮かせる
				},
				menuStyle,
			]}
		>
			{options.map((opt) => (
				<Menu.Item
					key={opt}
					onPress={() => {
						setSelected(opt);
						setVisible(false);
					}}
					title={opt}
					titleStyle={[{ fontSize: 16, color: "#333" }, itemStyle]}
				/>
			))}
		</Menu>
	);
}
