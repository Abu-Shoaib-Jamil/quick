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
        // backgroundColor : '#FFFFFF',
        // borderRadius : 10,
        borderBottomLeftRadius : 10,
        borderBottomRightRadius : 10,
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
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        // marginVertical:10,
    },
    newsitem : {
        // width : windowWidth*0.9,
        // borderWidth : 1,
        // borderColor : "red",
        // display:"flex",
        // flexDirection:"column",
        // alignItems:"center",
        // justifyContent:"center",
        overflow : "hidden",
        // elevation : 5,
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
        width : windowWidth*0.98,
        marginVertical:20,
    },
    homescreen : {
        display:"flex",
        flexDirection:"column",
        justifyContent:"flex-start",
    },
    actionbar : {
        // borderWidth : 1,
        // borderColor : "red",
        display :"flex",
        flexDirection : "row",
        maxHeight : windowHeight*0.15,
        justifyContent : "space-evenly",
        paddingVertical : 20,
    },
    // votesection : {
    //     display : "flex",
    //     flexDirection : "row",
    //     // justifyContent : "flex-start",
    //     // borderWidth : 1,
    //     // borderColor : "green",
        
    // },
    voteicon : {
        display : "flex",
        flexDirection : "row",
        alignItems :"center",
        justifyContent : "space-between",
        // borderWidth : 1,
        // borderColor : "red",
        width : 100,
    },
    // votecount : {
    //     marginHorizontal : 10,
    // }
});

export default styles;