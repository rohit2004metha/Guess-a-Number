import React from "react";
import { View, Text, StyleSheet } from "react-native";

import TitleText from "../components/TitleText.js";
import Colors from "../constants/colors.js";

const Header = (props) => {
	return (
		<View style={styles.header}>
			<TitleText>{props.title}</TitleText>
		</View>
	);
};

const styles = StyleSheet.create({
	header: {
		width: "100%",
		height: 90,
		backgroundColor: Colors.primary,
		paddingTop: 36,
		alignItems: "center",
		justifyContent: "center",
	},
});

export default Header;
