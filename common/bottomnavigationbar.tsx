import { View, Text } from 'react-native';
import styles from '../styles';

function BottomNavigationBar() {
    return(
        <View style={styles.bottomnavbar}>
            <View style={styles.newssection}>
                <Text>News</Text>
            </View>
            <View style={styles.bookmarksection}>
                <Text>Bookmark</Text>
            </View>
        </View>
    );
}

export default BottomNavigationBar;