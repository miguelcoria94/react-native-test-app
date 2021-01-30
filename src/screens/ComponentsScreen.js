import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    
    return (
        <View>
            <Text style={styles.textStyle}>This is the component screen</Text>
            <Text>this is a another text element</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        color: "blue"
    }
})

export default ComponentsScreen;