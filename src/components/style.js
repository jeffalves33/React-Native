import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        marginTop: 21,
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1,
        backgroundColor: 'black'
    },

    text: {
        color: 'white',
        fontSize: 40
    },

    buttons: {
        marginTop: 40,
        textAlign: 'auto',
        flexDirection: 'row', //alinha elementos
    },
    dadButton1: {
        marginRight: 5,
        backgroundColor: 'green'
    },
    button1:{
    },
    dadButton2: {
        marginRight: 5,
        backgroundColor: 'blue'
    },
    button2: {
    },
    dadButton3: {
        backgroundColor: 'red'
    },
    button3: {
    },

});

/*a ideia é que o uso de propriedades como justifyContent,
alingItems, entre outras, faz seus ajustes nos filhos do
elemento em que foi atribuído*/