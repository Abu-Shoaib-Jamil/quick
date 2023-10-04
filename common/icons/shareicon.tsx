import { Alert, Share } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

type ShareIconType = {
    newsurl : string,
    iconsize : number,
    iconcolor : string,
}

function ShareIcon({newsurl,iconsize,iconcolor} : ShareIconType){
    const share=async()=>{
        try{
            await Share.share({
                message : "Have a look at this !\n" 
                            + newsurl,
                // title : "Sharing news from QuickGist",
                // url : newsurl,
            })
        } catch (error){
            Alert.alert((error as Error).message);
        }
    }
    return(
        <MaterialIcon name="share-variant" size={iconsize} color={iconcolor} onPress={share}/>
    );
}

export default ShareIcon;