import React ,{Component}  from 'react';
import { View, Text, Switch, Modal ,Pressable } from 'react-native';
import styles from "./styles/styles";


export default class SwitchPage extends Component {state = {
    modalVisible: false
};

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }

    render() {
        const { modalVisible } = this.state;
        return (
            <View style={styles.sortFiltr.sortFiltrContainer}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        this.setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.sortFiltr.sortFiltrContainer}>
                        <View style={styles.sortFiltr.sortFiltrContainer}>
                            <Text style={styles.sortFiltr.sortFiltrText}>{Math.floor(Math.random()*100)}</Text>
                            <Pressable
                                onPress={() => this.setModalVisible(!modalVisible)}
                            >
                                <Text style={styles.sortFiltr.sortFiltrText}>Go back</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
                <Text style={styles.sortFiltr.sortFiltrText}>Random number from 0-100</Text>
                <Switch value={modalVisible} onValueChange={() => this.setModalVisible(true)}/>
            </View>
        );
    }
}