import { StyleSheet } from 'react-native';

const styles = {}
    styles.mainPage = StyleSheet.create({
        mainView: {
            flex: 1,
            backgroundColor: '#000',
        },
        mainButton: {
            flex: 1,
            backgroundColor: '#980000',
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: 70,
            marginVertical: 60,
            borderRadius: 50,
        },
        mainText: {
            fontSize: 30,
        },
    });

    styles.hookUseState = StyleSheet.create({
        hookView: {
            flex: 1,
            backgroundColor: '#070707',
            alignItems: 'stretch',
            justifyContent: 'center',
            textAlign : 'center',
            paddingHorizontal: 20,
            paddingVertical: 10,
        },
        hookText: {
            color:'#ffffff',
            fontSize:20,
        },
        hookTextExample: {
            color:'#980000',
            fontSize: 18,
        },
        hookViewExample: {
            flex: 1,
            backgroundColor: '#262626',
            justifyContent: 'center',
            marginHorizontal: 20,
            marginVertical: 10,
            paddingHorizontal: 20,
            paddingVertical: 20,
            borderRadius: 10,
        },
        hookButtons: {
            flexDirection: 'row',
        },
        hookButton: {
            flex: 1,
            backgroundColor: '#980000',
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: 30,
            marginVertical: 20,
            paddingVertical: 10,
            borderRadius: 50,
        }
    });

    styles.restParameters = StyleSheet.create({
        restView: {
            flex: 1,
            backgroundColor: '#980000',
            alignItems: 'stretch',
            justifyContent: 'center',
            textAlign : 'center',
            paddingHorizontal: 20,
            paddingVertical: 10,
        },
        restText: {
            color:'#ffffff',
            fontSize:15,
        },
        restTextExample: {
            color:'#000000',
            fontSize: 18,
        },
        restViewExample: {
            flex: 1,
            backgroundColor: '#ffffff',
            justifyContent: 'center',
            marginHorizontal: 20,
            marginVertical: 10,
            paddingHorizontal: 20,
            paddingVertical: 20,
        },
        restButtons: {
            flexDirection: 'row',
        },
        restButton: {
            flex: 1,
            backgroundColor: '#000000',
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: 20,
            marginVertical: 30,
            paddingVertical: 10,
        }
    });

    styles.spreadOperator = StyleSheet.create({
        spreadView: {
            flex: 1,
            backgroundColor: '#ffffff',
            alignItems: 'stretch',
            justifyContent: 'center',
            textAlign : 'center',
            paddingHorizontal: 20,
            paddingVertical: 10,
        },
        spreadText: {
            color:'#980000',
            fontSize: 20,
        },
        spreadTextExample: {
            color:'#000000',
            fontSize: 18,
        },
        spreadViewExample: {
            flex: 1,
            backgroundColor: '#c7c7c7',
            justifyContent: 'center',
            marginHorizontal: 20,
            marginVertical: 10,
            paddingHorizontal: 20,
            paddingVertical: 20,
            borderRadius: 50,
        },
        spreadButtons: {
            flexDirection: 'row',
        },
        spreadButton: {
            flex: 1,
            backgroundColor: '#c7c7c7',
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: 20,
            marginVertical: 30,
            paddingVertical: 10,
        }
    });

export default styles