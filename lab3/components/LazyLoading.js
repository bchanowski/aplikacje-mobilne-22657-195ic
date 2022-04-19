import React ,{Component ,Suspense}  from 'react';
import { View, Text} from 'react-native';
import styles from "./styles/styles";

const Lazy = React.lazy(() => import('./ToLoad'))

export default class LazyLoading extends Component {
    render(){
        return (
            <View style={styles.lazyLoading.loadContainer}>
                <View style = {styles.lazyLoading.loadEx}>
                    <Suspense fallback={<Text>Loading...</Text>}>
                        <Lazy length="100000"/>
                    </Suspense>
                </View>
            </View>
        );
    }
}