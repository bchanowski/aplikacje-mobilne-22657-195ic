import React, {Component} from 'react';
import { ScrollView, View, Image} from 'react-native';
import styles from "./styles";


export default class ScrollOne extends Component {
    render() {
        return (
            <View style={styles.firstScroll.container}>
                <View style={styles.firstScroll.viewStyle}>
                <ScrollView horizontal={true}>
                        <Image source={{ uri: 'https://reddit-econ-prod-assets-permanent.s3.amazonaws.com/asset-manager/t5_3ndbi/tyo8sEh1Se.png'}} style={styles.firstScroll.scrollView}/>
                        <Image source={{ uri: 'https://reddit-econ-prod-assets-permanent.s3.amazonaws.com/asset-manager/t5_3ndbi/H3vHdBtobg.png'}} style={styles.firstScroll.scrollView}/>
                        <Image source={{ uri: 'https://reddit-econ-prod-assets-permanent.s3.amazonaws.com/asset-manager/t5_3ndbi/774bdmt9z8.png'}} style={styles.firstScroll.scrollView}/>
                        <Image source={{ uri: 'https://redacaoemcampo.com/wp-content/uploads/2021/12/How-Red-Bulls-Christian-Horner-conned-Michael-Masi-leaving-Mercedes.jpeg'}} style={styles.firstScroll.scrollView}/>
                        <Image source={{ uri: 'https://www.wykop.pl/cdn/c3201142/comment_1648990846O9bDmnDp0lOW0Uk5pI4Jd3.jpg'}} style={styles.firstScroll.scrollView}/>
                        <Image source={{ uri: 'https://reddit-econ-prod-assets-permanent.s3.amazonaws.com/asset-manager/t5_3ndbi/yTJGtYTaot.png'}} style={styles.firstScroll.scrollView}/>
                        <Image source={{ uri: 'https://reddit-econ-prod-assets-permanent.s3.amazonaws.com/asset-manager/t5_3ndbi/3RAHDhrueB.jpeg'}} style={styles.firstScroll.scrollView}/>
                    </ScrollView>
                </View>
            </View>
        );
    }
}