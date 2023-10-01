import {Image} from "react-native";
import styles from "../styles";

type ImageBuilderType = {src : string}

function ImageBuilder({src}:ImageBuilderType){
    return(
        <Image style = {styles.image} source={{uri : src}} resizeMethod="scale" resizeMode="cover" borderRadius={10}/>
    );
}

export default ImageBuilder;