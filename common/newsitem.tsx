import { Text, View } from "react-native";
import NewsItemType from "../models/newsitem";
import ImageBuilder from "./image";
import styles from "../styles";
import ActionBar from "./actionbar";
import { useState } from "react";

function NewsItem({item}:NewsItemType){
    // console.log(item.media.image_url);
    // let votecount = 100;
    const [votecount,setVotecount] = useState(100);

    const increaseVoteCount = () =>{
        console.log("Increasing vote count by 1");
        setVotecount(votecount+1);
    }
    const decreaseVoteCount = () =>{
        console.log("Decreasing vote count by 1");
        setVotecount(votecount-1);
    }

    return(
        <View style={styles.newsitemwrapper}>
            <View style={styles.newsitem}>
                {/* Make this headline Text component as an anchor tag which redirects to {item.news_url}*/}
                <Text style = {styles.headline}>{item.headline.trim()}</Text>
                <ImageBuilder src={item.media.image_url.trim()}/>
                <Text style = {styles.summary}>{item.summary.trim()}</Text>
                <ActionBar urlhash={item.url_hash} newsurl={item.news_url} votecount={votecount} increaseVoteCount={increaseVoteCount} decreaseVoteCount={decreaseVoteCount}/>
            </View>
        </View>
    );
}


export default NewsItem;