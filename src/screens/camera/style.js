import { StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    captureButton:{
        paddingHorizontal:20,
        height:50, 
        backgroundColor:'white',
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        marginTop:20,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 10,
        marginBottom:20
    },
    buttonTextStyle:{
        fontSize:17,
        fontWeight:'bold',
        color:'black'
    },
    imageStyle:{
        width:200, 
        height:200,
        borderRadius:20,
        alignSelf:'center',
        marginTop:50
    }
})

export default styles;