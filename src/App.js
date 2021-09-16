import React from 'react';
import { SafeAreaView, Text } from 'react-native';

import style from './components/style';

import Cronometro from './components/Cronometro';

export default () => {
    return (
        <SafeAreaView style={style.container}>
            <Cronometro/>
        </SafeAreaView>
    );
}
