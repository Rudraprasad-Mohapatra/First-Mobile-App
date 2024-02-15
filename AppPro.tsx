/* eslint-disable */

import React from 'react';

import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    useColorScheme
} from 'react-native';

function AppPro(): JSX.Element {
    const colorScheme = useColorScheme();
    const isDarkMode = useColorScheme() === "dark";

    const containerStyle = {
        ...styles.container,
        backgroundColor: isDarkMode ? '#000000' : '#FFFFFF'
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={containerStyle}>
                <Text style={isDarkMode ? styles.whiteText : styles.darkText}>Namaste Duniya in "{colorScheme}"" theme.</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    whiteText: {
        color: '#FFFFFF'
    },
    darkText: {
        color: '#000000'
    }
})

export default AppPro;
