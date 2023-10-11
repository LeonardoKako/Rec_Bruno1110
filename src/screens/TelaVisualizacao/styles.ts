import { ImageBackground, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    body: {
        display: 'flex',
        alignItems: 'center',
      },
    container: {
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        maxWidth: 400,
        borderRadius: 25,
        marginTop: 30,
        //justifyContent: 'center',
    },

    titulo:{
        color: '#000',
        fontSize: 25,
        fontWeight: 'bold',
        margin: 10
    },
    input: {
        textAlign: 'center',
        border: 2,
        backgroundColor: '#f8f4f4',
        width: '100%',
        maxWidth: 200,
        margin: 5,
        height: 22,
        borderRadius: 15,
        borderWidth: 2,
    },
    btn: {
        width: '100%',
        alignItems: 'center',
        maxWidth: 200,
        borderRadius: 15,
        height: 30,
        margin: 10,
        borderWidth: 2,
        borderColor: '#000',
        backgroundColor: '#908c8c'
    },
    dado: {

    }

});