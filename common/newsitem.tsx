import { Text, View } from "react-native";
import NewsItemType from "../models/newsitem";
import ImageBuilder from "./image";
import styles from "../styles";

function NewsItem({item}:NewsItemType){
    // console.log(item.media.image_url);
    return(
        <View style={styles.newsitemwrapper}>
            <View style={styles.newsitem}>
                {/* Make this headline Text component as an anchor tag which redirects to {item.news_url}*/}
                <Text style = {styles.headline}>{item.headline.trim()}</Text>
                <ImageBuilder src={item.media.image_url.trim()}/>
                <Text style = {styles.summary}>{item.summary.trim()}</Text>
            </View>
        </View>
    );
}


export default NewsItem;