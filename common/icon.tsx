import Icon from 'react-native-vector-icons/FontAwesome';
import IconBuilderType from '../models/icon';

function IconBuilder({name}:IconBuilderType){
    let icon = null;
    switch(name){
        case "news": icon = <Icon name="newspaper-o" size={20} color="#FFFFFF"/>;
                    break;
        case "bookmark": icon = <Icon name="bookmark-o" size={20} color="#FFFFFF"/>;
                    break;
    }
    return icon;
}

export default IconBuilder;