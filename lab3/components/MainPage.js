import * as React from 'react';
import { View, Text, TouchableOpacity  } from 'react-native';
import styles from './styles/styles';

export default function MainPage({navigation}) {
    return (
        <View style={styles.mainPage.mainView}>
            <TouchableOpacity style={styles.mainPage.mainButton} onPress={() => navigation.navigate('SortFiltr')} >
                <Text style={styles.mainPage.mainText}>Sort & Filtr</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mainPage.mainButton} onPress={() => navigation.navigate('LazyLoading')} >
                <Text style={styles.mainPage.mainText}>Lazy Loading</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mainPage.mainButton} onPress={() => navigation.navigate('StepProgress')} >
                <Text style={styles.mainPage.mainText}>Step Progress</Text>
            </TouchableOpacity>
        </View>
    );
}