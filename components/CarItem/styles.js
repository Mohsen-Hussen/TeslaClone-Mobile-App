import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	image: {
		width: "100%",
		height: "100%",
		resizeMode: "cover",
		position: "absolute",
	},
	carContainer: {
		width: "100%",
		height: "100%",
	},
	titles: {
		marginTop: "10%",
		width: "100%",
		alignItems: "center",
	},
	title: {
		fontSize: 40,
		fontWeight: "500",
	},
	subTitle: {
		fontSize: 16,
		color: "#5c5e62",
	},
});

export default styles;
