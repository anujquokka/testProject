import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

const Header = ({ heading }) => {
    return (
        <View style={styles.headerStyle}>
            <Text style={styles.headingTextStyle}>{heading}</Text>
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: 'white',
        width: '100%',
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,
    },
    headingTextStyle: {
        fontSize: 25,
        fontWeight: "800",
        color:'black'
    }

})
