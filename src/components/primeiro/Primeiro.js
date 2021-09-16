import React from 'react';
import { StyleSheet, View ,SafeAreaView, Text, Image} from 'react-native';

export default () => {
    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.logo}>
                <Image
                    style={styles.logoReact}
                    source={require('../../images/react2.png')}
                />
            </View>

            <View style={styles.login}>
                <Text style={styles.text}>login</Text>
            </View>

            <View style={styles.senha}>
                <Text style={styles.text}>senha</Text>
            </View>

            <Text style={styles.cadastro}>cadastre-se</Text>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
    },

    text: {
        textAlign: 'center',
        color: 'white',
    },

    logo: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 400,
    },

    login: {
        paddingTop: 20,
        height: 60,
        backgroundColor: 'blue',
    },

    senha: {
        paddingTop: 20,
        height: 60,
        backgroundColor: 'black',
    },

    cadastro: {
        paddingTop: 100,
        textAlign: 'center',
    }
});