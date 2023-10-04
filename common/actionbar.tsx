import { View } from "react-native";
import styles from "../styles";
import ActionBarType from "../models/actionbar";
import {useState } from "react";
import VoteIcon from "./icons/voteicon";
import BookmarkIcon from "./icons/bookmarkicon";
import ShareIcon from "./icons/shareicon";

// type buttonClickedType = {
//     buttonname : string,
// }

// function buttonClicked ({buttonname}:buttonClickedType){
//     console.log(buttonname + " clicked !");
// }


// --Upvote count, Downvote count-- is passed down to actionbar as props from newsitem component.
// Upvote and downvote is displayed using Icon and Text combination
// ActionBar component should also have --urlhash-- of the newsitem, so urlhash should also be passed as props to ActionBar. 
// Now using this urlhash we need to open a database connection to dynamodb asynchronously and perform following actions :
// isUpvoted and isDownvoted are boolean values which are stored locally.
//      if(!isUpvoted && !isDownvoted){increase the upvote count by 1, set isUpvoted = true}
//      if(!isUpvoted && isDownvoted)    
//      If user upvoted ->(if (!Upvoted) {, this action I think will be handled in reducer}) 
//      If user downvoted ->(if (!Downvoted) {decrease the downvote by 1 , set isDownvoted = true, this action I think will be handled in reducer.}) 
//      If user both upvoted and downvoted (isUpvoted && isDownvoted)

// Params required
// {upvote,downvote,urlhash,}
function ActionBar({urlhash,newsurl,votecount,increaseVoteCount, decreaseVoteCount}:ActionBarType){
    // We need to fetch isBookmarked,isUpvoted and isDownvoted from local storage(Cache) at this point
    
    // We need to subscribe to store at this point and let the subscribe method run return method every time state is updated.
    // Get isUpvoted,isDownvoted,upvoteCount and downvoteCount from the latest state and pass it down to respective components
    const [isUpvoted,setisUpvoted] = useState(false);
    const [isDownvoted,setisDownvoted] = useState(false);
    const [isBookmarked,setisBookmarked] = useState(false);

    const iconsize = 30;
    const iconcolor = "white";

    const toggleBookmark=()=>{
        console.log("Bookmark Button clicked !");
        setisBookmarked(!isBookmarked);
    }
    const toggleUpvote=()=>{
        console.log("Upvote Button clicked !");

        if(isUpvoted){
            decreaseVoteCount();
            setisUpvoted(false);
        } else {
            increaseVoteCount();
            setisUpvoted(true);
        }
    }
    const toggleDownvote=()=>{
        console.log("Downvote Button clicked !");
        if(isDownvoted){
            increaseVoteCount();
            setisDownvoted(false);
        } else {
            decreaseVoteCount();
            setisDownvoted(true);
        }
    }
    return(
        <View style= {styles.actionbar}>
            {/* setIsUpvoted and setIsDownvoted needs to be passed down to voteicon */}
            <VoteIcon isUpvoted={isUpvoted} isDownvoted={isDownvoted} votecount={votecount} iconsize={iconsize} iconcolor={iconcolor} handleUpvote={toggleUpvote} handleDownvote={toggleDownvote}/>
            {/* setIsBookmarked needs to be passed down to BookmarkIcon */}
            <BookmarkIcon isBookmarked={isBookmarked} iconsize={iconsize} iconcolor={iconcolor} handleBookmark={toggleBookmark}/>
            <ShareIcon newsurl={newsurl} iconsize={iconsize} iconcolor={iconcolor} />
        </View>
    );
}

export default ActionBar;