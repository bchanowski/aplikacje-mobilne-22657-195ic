import React ,{Component}  from 'react';
import { View, Text,TextInput ,ScrollView} from 'react-native';
import styles from "./styles/styles";

export default class TextInputPage extends Component {
    render(){
        return (
            <View style={styles.sortFiltr.sortFiltrContainer}>
                <View>
                    <Text style={styles.sortFiltr.sortFiltrText}>Default</Text>
                    <TextInput style={styles.sortFiltr.sortFiltrInput} /><Text/>
                </View>
                <View>
                    <Text style={styles.sortFiltr.sortFiltrText} >Placeholder</Text>
                    <TextInput style={styles.sortFiltr.sortFiltrInput} placeholder="Placeholder" /><Text/>
                </View>
                <View>
                    <Text style={styles.sortFiltr.sortFiltrText}>Default Value</Text>
                    <TextInput style={styles.sortFiltr.sortFiltrInput} defaultValue="Set Value..." autoCorrect={true}/><Text/>
                </View>
                <View>
                    <Text style={styles.sortFiltr.sortFiltrText}>Multiline</Text>
                    <TextInput style={styles.sortFiltr.sortFiltrInput} multiline={true}/><Text/>
                </View>
                <View>
                    <Text style={styles.sortFiltr.sortFiltrText}>Max Length = 10</Text>
                    <TextInput style={styles.sortFiltr.sortFiltrInput} maxLength={10} /><Text/>
                </View>
                <View>
                    <Text style={styles.sortFiltr.sortFiltrText}>Numeric Keyboard + Secure Text Entry</Text>
                    <TextInput style={styles.sortFiltr.sortFiltrInput} keyboardType="numeric" secureTextEntry/><Text/>
                </View>
                <View>
                    <Text style={styles.sortFiltr.sortFiltrText}>Editable = false</Text>
                    <TextInput style={styles.sortFiltr.sortFiltrInput} editable={false} defaultValue="Blocked Input"/><Text/>
                </View>
            </View>

        );
    }
}