import React, {Component} from 'react';
import styles from './styles'
import { View, ScrollView} from 'react-native';

export default class ScrollTwo extends Component {
    render() {
        return (
            <View>
                <ScrollView contentContainerStyle={styles.secondScroll.scrollView}>
                    <View style={[styles.secondScroll.viewStyle, { backgroundColor: "#980000" }]}/>
                    <View style={[styles.secondScroll.viewStyle, { backgroundColor: "#ff0000" }]}/>
                    <View style={[styles.secondScroll.viewStyle, { backgroundColor: "#f86700" }]}/>
                    <View style={[styles.secondScroll.viewStyle, { backgroundColor: "#f5ee00" }]}/>
                    <View style={[styles.secondScroll.viewStyle, { backgroundColor: "#99ff00" }]}/>
                    <View style={[styles.secondScroll.viewStyle, { backgroundColor: "#20ff00" }]}/>
                    <View style={[styles.secondScroll.viewStyle, { backgroundColor: "#00ffc4" }]}/>
                    <View style={[styles.secondScroll.viewStyle, { backgroundColor: "#008cff" }]}/>
                    <View style={[styles.secondScroll.viewStyle, { backgroundColor: "#0b43b7" }]}/>
                    <View style={[styles.secondScroll.viewStyle, { backgroundColor: "#a201ff" }]}/>
                </ScrollView>
            </View>
        );
    }
}
