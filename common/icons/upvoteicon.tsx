import React from "react";
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

type UpvoteIconType = {
    isUpvoted : Boolean,
    handleUpvote : ()=>void,
    iconsize : number,
    iconcolor : string,
}

function UpvoteIcon({isUpvoted,iconsize,iconcolor,handleUpvote} : UpvoteIconType){
    return(
        <MaterialIcon name={isUpvoted ? "arrow-up-bold" : "arrow-up-bold-outline"} size={iconsize} color={iconcolor} onPress={handleUpvote}/>
    );
}

export default UpvoteIcon;