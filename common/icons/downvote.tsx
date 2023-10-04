import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';


type DownvoteIconType = {
    isDownvoted : Boolean,
    handleDownvote : ()=>void,
    iconsize : number,
    iconcolor : string,
}

function DownvoteIcon({isDownvoted,iconsize,iconcolor,handleDownvote} : DownvoteIconType){
    return(
        <MaterialIcon name={isDownvoted?"arrow-down-bold":"arrow-down-bold-outline"} size={iconsize} color={iconcolor} onPress={handleDownvote}/>
    );
}

export default DownvoteIcon;