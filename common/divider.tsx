import { View } from "react-native";
import styles from '../styles/index';

function Divider(){
    return (
        <View style={styles.divider}>
            <View style ={styles.dividerLine}></View>
        </View>
    );
}

export default Divider;