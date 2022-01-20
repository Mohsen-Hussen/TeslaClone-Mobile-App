import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";

import CarItem from "./components/CarItem/CarItem";

const App = () => {
	return (
		<View style={styles.container}>
			<CarItem />
			<StatusBar style="auto" />
		</View>
	);
};

export default App;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
