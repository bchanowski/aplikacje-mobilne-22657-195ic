import React, {useState} from 'react';
import {View, Platform, Text, TouchableOpacity} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from "./styles/styles";

export default function DateTime() {
    const [date, setDate] = useState(new Date("May 02, 2022 21:36:11"));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const B = (props) => <Text style={{fontWeight: 'bold',color:'black'}}>{props.children}</Text>

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
        alert(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

    return (
        <>
            <View style={styles.lazyLoading.loadContainer}>
                <TouchableOpacity  onPress={showDatepicker}>
                    <Text style={styles.lazyLoading.loadText}>
                        Select Date...
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity  onPress={showTimepicker}>
                    <Text style={styles.lazyLoading.loadText}>
                        Select Time...
                    </Text>
                </TouchableOpacity>
            </View>
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                />
            )}
            <View style={styles.lazyLoading.loadContainer}>
                <Text style={styles.lazyLoading.loadEx}>Date: {date.getDate()}/{date.getMonth()}/{date.getFullYear()}</Text>
                <Text style={styles.lazyLoading.loadEx}>Time: {date.getHours()}:{date.getMinutes()}</Text>
            </View>
        </>
    );
};