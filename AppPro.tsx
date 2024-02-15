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
    const isDarkMode = useColorScheme() === "dark"
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text style={isDarkMode ? styles.whiteText : styles.darkText}>Namaste Duniya</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
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
