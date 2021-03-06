import * as React from 'react';
import { View, Text, TouchableOpacity  } from 'react-native';
import styles from './styles/styles';

export default function MainPage({navigation}) {
    return (
        <View style={styles.mainPage.mainView}>
            <TouchableOpacity style={styles.mainPage.mainButton} onPress={() => navigation.navigate('SortFiltr')} >
                <Text style={styles.mainPage.mainText}>Hook Use State</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mainPage.mainButton} onPress={() => navigation.navigate('LazyLoading')} >
                <Text style={styles.mainPage.mainText}>Rest Parameters</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mainPage.mainButton} onPress={() => navigation.navigate('StepProgress')} >
                <Text style={styles.mainPage.mainText}>Spread Operator</Text>
            </TouchableOpacity>
        </View>
    );
}