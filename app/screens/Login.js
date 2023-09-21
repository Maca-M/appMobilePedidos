import { useState} from 'react'
import { StyleSheet, Text, ScrollView,View,StatusBar,Image,TextInput, TouchableOpacity } from 'react-native'
import {Colors} from '../../app/constants'
import Icon from 'react-native-vector-icons/FontAwesome'
import Buttons from '../components/Buttons'
import { validateLogin } from '../helpers/validateLogin'




const Login = ({navigation}) => {

    const [formData,setformData] = useState({
        email:'',
        password:''
    })

    return (
        <ScrollView style={{flex:2,flexDirection:'column',backgroundColor:'#fff',paddingTop:40,paddingHorizontal:'4%'}} >
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            
                <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
                    <Text style={{fontFamily:'OpenSans-SemiBold',fontSize:30,color:Colors.black}}>Bienvenido!</Text>
                    <Image source={require('../assets/images/waving_hand.png')} style={{width:30,height:30}}/>
                </View>

                <View style={{flexDirection:'column',paddingTop:20}} >

                    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',backgroundColor:'#ededed',width:'100%',borderRadius:10,height:60,paddingLeft:20,marginTop:20}} >
                        <Icon name="envelope-o" size={22} color="#818181" />
                        <TextInput onChangeText={(text)=>{setformData((prevState)=>({...prevState,email:text}))}} style={styles.input} placeholder="Email" placeholderTextColor="#818181" />
                    </View>

                    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',backgroundColor:'#ededed',width:'100%',borderRadius:10,height:60,paddingLeft:20,marginTop:30}} >
                        <Icon name="lock" size={22} color="#818181" />
                        <TextInput onChangeText={(text)=>{setformData((prevState)=>({...prevState,password:text}))}} style={styles.input} placeholder="Contraseña" secureTextEntry={true} placeholderTextColor="#818181" />
                    </View>

                    <View style={{width:'98%',marginBottom:10}} >
                        <Text style={{fontSize:14,fontFamily:'OpenSans-SemiBold',color:'#818181',alignSelf:'flex-end',paddingTop:15}} >¿Olvidó su contraseña?</Text>
                    </View>

                </View>

                <View style={{justifyContent:'center',alignItems:'center',marginTop:30}}>
                    <Buttons  btn_text={"Ingresar"} on_press={()=>validateLogin(formData,navigation)}/>
                </View>

        </ScrollView>
    )
}

export default Login

const styles = StyleSheet.create({
    input:{
        position:'relative',
        height:'100%',
        width:'90%',
        fontFamily:'OpenSans-Medium',
        paddingLeft:20,
    },
    social_btn:{
        height:55,
        width:'100%',
        borderWidth:1,
        borderRadius:10,
        borderColor:'#ddd',
        flexDirection:'row',
        alignItems:'center',
        marginBottom:20
    },
    social_img:{
        width:25,
        height:25,
        marginLeft:15
    }
})