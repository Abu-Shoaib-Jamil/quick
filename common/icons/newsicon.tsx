import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

type NewsIconType = {
    iconsize : number,
    iconcolor : string,
}

function NewsIcon({iconsize,iconcolor} : NewsIconType){
    return(
        <FontAwesomeIcon name="newspaper-o" size={iconsize} color={iconcolor}/>
    );
}

export default NewsIcon;