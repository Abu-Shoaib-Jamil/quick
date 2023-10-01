import {Dimensions,StyleSheet} from 'react-native';


const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
    divider : {
        display:"flex",
        flexDirection : "row",
        justifyContent:"center",
        alignContent:"center",
        paddingTop : 10,
        paddingBottom : 10,
    },
    dividerLine : {
        width : windowWidth*0.7,
        borderBottomWidth: 1,
        borderColor : "#696969",
    },
    header : {
        padding : 20,
        // marginBottom:10,
        backgroundColor : '#FFFFFF',
        display:"flex",
        flexDirection: "row",
        alignItems:"center",
        justifyContent:"center",
        borderRadius : 10,
    },
    androidShadow : {
        elevation:10,
    },
    textStyle : {
        fontSize: 20,
        fontWeight : "bold",
    },
    listview : {
        // borderWidth : 1,
        // borderColor : "blue",
        
    },
    newsitemwrapper :{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        marginVertical:10,
    },
    newsitem : {
        width : windowWidth*0.975,
        overflow : "hidden",
        elevation : 5,
        padding : 10,
        borderRadius : 5,
    },
    headline : {
        textAlign:"left",
        fontWeight : "900",
        fontSize : windowHeight*0.025,
        
    },
    summary : {
        textAlign:"justify",
    },
    image : {
        height : windowHeight*0.3,
        width : windowWidth*0.9,
        // backgroundColor: 
        marginVertical:20,
    },
    homescreen : {
        display:"flex",
        flexDirection:"column",
        justifyContent:"flex-start",
    },
    bottomnavbar : {
        padding : 20,
        backgroundColor : '#FFFFFF',
        display:"flex",
        flexDirection: "row",
    },
    newssection : {
        flexGrow : 1,
    },
    bookmarksection : {
        flexGrow : 1,
    }
});

export default styles;