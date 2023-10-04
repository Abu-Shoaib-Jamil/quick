import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';


type BookmarkIconType = {
    isBookmarked : Boolean,
    iconsize : number,
    iconcolor : string,
    handleBookmark : ()=>void,
}

// function handleBookmark(){
//     console.log("Bookmark button clicked !");
// }

function BookmarkIcon({isBookmarked,iconsize,iconcolor,handleBookmark} : BookmarkIconType){
    return(
        <FontAwesomeIcon name={isBookmarked ?"bookmark":"bookmark-o"} size={iconsize} color={iconcolor} onPress={handleBookmark}/>
    );
}

export default BookmarkIcon;