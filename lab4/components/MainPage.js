import * as React from 'react';
import { View, Text, TouchableOpacity  } from 'react-native';
import styles from './styles/styles';

export default function MainPage({navigation}) {
    return (
        <View style={styles.mainPage.mainView}>
            <TouchableOpacity style={styles.mainPage.mainButton} onPress={() => navigation.navigate('TextInput')} >
                <Text style={styles.mainPage.mainText}>Text Input</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mainPage.mainButton} onPress={() => navigation.navigate('Select')} >
                <Text style={styles.mainPage.mainText}>Select</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mainPage.mainButton} onPress={() => navigation.navigate('Switch')} >
                <Text style={styles.mainPage.mainText}>Switch</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mainPage.mainButton} onPress={() => navigation.navigate('DateTime')} >
                <Text style={styles.mainPage.mainText}>DateTime</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mainPage.mainButton} onPress={() => navigation.navigate('Active')} >
                <Text style={styles.mainPage.mainText}>Active</Text>
            </TouchableOpacity>
        </View>
    );
}