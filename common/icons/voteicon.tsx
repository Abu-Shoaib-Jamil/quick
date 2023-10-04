import { Text, View } from "react-native";
import DownvoteIcon from "./downvote";
import UpvoteIcon from "./upvoteicon";
import styles from "../../styles";


type VoteIconType = {
    isUpvoted : Boolean,
    isDownvoted : Boolean,
    votecount : number,
    handleUpvote : ()=>void,
    handleDownvote : ()=>void,
    iconsize : number,
    iconcolor : string,

}

function VoteIcon({isUpvoted,isDownvoted,votecount,iconsize,iconcolor,handleUpvote,handleDownvote} : VoteIconType){
    return(
        <View style= {styles.voteicon}>
            <UpvoteIcon isUpvoted={isUpvoted} iconsize={iconsize} iconcolor={iconcolor} handleUpvote={handleUpvote}/>
            <Text>{votecount}</Text>
            <DownvoteIcon isDownvoted={isDownvoted} iconsize={iconsize} iconcolor={iconcolor} handleDownvote={handleDownvote}/>
        </View>
    );
}

export default VoteIcon;