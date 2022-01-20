import React from "react";
import { Text, View, ImageBackground } from "react-native";
import styles from "./styles";

import StyledButton from "../StyledButton/StyledButton";

const CarItem = () => {
	return (
		<>
			<ImageBackground
				source={require("../../assets/images/ModelS.jpeg")}
				style={styles.image}
			/>
			<View style={styles.carContainer}>
				<View style={styles.titles}>
					<Text style={styles.title}>Model S</Text>
					<Text style={styles.subTitle}>Starting at $69.420</Text>
				</View>
			</View>
			<View style={styles.buttonsContainer}>
				<StyledButton
					type="primary"
					content={"Custom Order"}
					onPress={() => {
						console.warn("Custom Order was pressed");
					}}
				/>

				<StyledButton
					type="secondary"
					content={"Existing Inventory"}
					onPress={() => {
						console.warn("Existing Inventory was pressed");
					}}
				/>
			</View>
		</>
	);
};

export default CarItem;
