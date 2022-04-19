import React ,{Component}  from 'react';
import { ActivityIndicator,StyleSheet,View, Text } from 'react-native';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import styles from "./styles/styles";

export default class FirstStepProgress extends Component {

    defaultScrollViewProps = {
        keyboardShouldPersistTaps: 'handled',
        contentContainerStyle: {
            flex: 1,
            justifyContent: 'center'
        }
    };

    render(){
        const progressStepsStyle = {
            activeStepIconBorderColor: '#980000',
            activeLabelColor: '#980000',
            activeStepNumColor: '#980000',
            activeStepIconColor: '#000000',
            completedStepIconColor: '#000000',
            completedProgressBarColor: '#980000',
            completedCheckColor: '#980000'
        };

        const buttonTextStyle = {
            color: '#000000',
            fontWeight: 'bold'
        };
        return (
            <View style={{flex: 1, marginTop: 50 }}>
                <ProgressSteps {...progressStepsStyle}>
                    <ProgressStep
                        label="First Step"
                        scrollViewProps={this.defaultScrollViewProps}
                        nextBtnTextStyle={buttonTextStyle}
                        previousBtnTextStyle={buttonTextStyle}
                    >
                        <View style={{ alignItems: 'center' }}>
                            <Text>Step 1</Text>
                            <View style={[styles.stepProgress.stepContainer, styles.stepProgress.stepHorizontal]}>

                                <ActivityIndicator size="large" color="#03fcf0" />
                            </View>

                        </View>
                    </ProgressStep>
                    <ProgressStep
                        label="Second Step"
                        scrollViewProps={this.defaultScrollViewProps}
                        nextBtnTextStyle={buttonTextStyle}
                        previousBtnTextStyle={buttonTextStyle}
                    >
                        <View style={{ alignItems: 'center' }}>
                            <Text>Step 2</Text>
                            <View style={[styles.stepProgress.stepContainer, styles.stepProgress.stepHorizontal]}>

                                <ActivityIndicator size="large" color="#fc0331" />
                            </View>
                        </View>
                    </ProgressStep>
                    <ProgressStep
                        label="Third Step"
                        scrollViewProps={this.defaultScrollViewProps}
                        nextBtnTextStyle={buttonTextStyle}
                        previousBtnTextStyle={buttonTextStyle}
                    >
                        <View style={{ alignItems: 'center' }}>
                            <Text>Step 3</Text>
                            <View style={[styles.stepProgress.stepContainer, styles.stepProgress.stepHorizontal]}>

                                <ActivityIndicator size="small" color="#00ff00" />
                            </View>
                        </View>
                    </ProgressStep>
                </ProgressSteps>
            </View>
        );
    }
}
