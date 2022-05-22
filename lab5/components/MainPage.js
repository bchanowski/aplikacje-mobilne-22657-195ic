import * as React from 'react';
import { View, Text, TouchableOpacity  } from 'react-native';
import styles from './styles'


export default function MainPage({navigation}) {
    return (
      <View style={styles.mainPage.mainView}>
          <TouchableOpacity style={styles.mainPage.mainButton} onPress={() => navigation.navigate('ScrollOne')}>
              <Text style={styles.mainPage.mainText}> ScrollView 1 </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.mainPage.mainButton} onPress={() => navigation.navigate('ScrollTwo')}>
              <Text style={styles.mainPage.mainText}> ScrollView 2 </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.mainPage.mainButton} onPress={() => navigation.navigate('Touchable')}>
              <Text style={styles.mainPage.mainText}> Touchable </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.mainPage.mainButton} onPress={() => navigation.navigate('SwipeableApp')}>
              <Text style={styles.mainPage.mainText}> Swipeable </Text>
          </TouchableOpacity>
      </View>
    );
}