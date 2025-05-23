import React from "react";
import { Text } from "react-native";

const getFullName = (firstName, secondName, thirdName) => {
    return firstName + " " + secondName + " " + thirdName;
}

const Cat = () => {
    return (
        <Text>
            Hello! I am {getFullName("Nguyen", "Mau", "Dong")}!
        </Text>
    );
}

export default Cat;
