import React from "react";
import { View, StyleSheet } from "react-native";
import { colors } from "@/src/theme/colors";

const Footer = () => {
	return (
		<View style={styles.footer}>
			<View>Footer</View>
		</View>
	);
};

export default Footer;

const styles = StyleSheet.create({
	footer: {
		backgroundColor: colors.themeColor,
	},
});
