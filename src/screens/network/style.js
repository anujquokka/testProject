import { StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    tileStyle: {
        width: '90%',
        paddingVertical: 12,
        backgroundColor: 'white',
        margin: 10,
        alignSelf: 'center',
        borderRadius: 20,
        paddingHorizontal: 15,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 10,
    },
    titleText: {
        fontSize: 16,
        fontWeight: '800',
        textTransform: 'capitalize'
    },
    bodyText: {
        fontSize: 14,
        textTransform: 'uppercase',
        marginTop: 5
    },
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
})

export default styles;