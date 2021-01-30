import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const name = "Miky"

    return (
        <View>
            <Text style={styles.textStyle}>Getting started with React Native!</Text>
            <Text>This app was created by {name}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45,
        color: "blue"
    },

    nameStyles: {
        fontSize: 20
    }
})

export default ComponentsScreen;