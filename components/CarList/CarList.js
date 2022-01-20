import React from "react";
import { View, FlatList, Dimensions } from "react-native";
import CarItem from "../CarItem/CarItem";

import styles from "./styles";
import cars from "./cars";

const CarList = () => {
	return (
		<View style={styles.container}>
			<FlatList
				data={cars}
				keyExtractor={cars.name}
				renderItem={({ item }) => <CarItem car={item} />}
				snapToAlignment={"start"}
				decelerationRate={"fast"}
				snapToInterval={Dimensions.get("window").height}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	);
};

export default CarList;
