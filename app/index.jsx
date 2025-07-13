import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { Color } from '../Constant/Color'
import Icon from '../assets/images/FrontIcon.png'
import {moderateScale, scale } from "react-native-size-matters";
import {useRouter} from 'expo-router'
const index = () => {
   
  const Route = useRouter()
  return (
    <View style={styles.Container}>
       <View >
         <Image source={Icon } width={0}  height={2}/>
       </View>
       <Text style={styles.txt}>Todo-List</Text>

       <TouchableOpacity style={styles.Btn} onPress={()=>Route.push('Home')}>
        <Text style={{color:Color.light_fade,fontWeight:'700',fontSize:scale(15)}}>Get Startet</Text>
       </TouchableOpacity>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  Container:{
    backgroundColor:Color.primary_color,
    alignItems:'center',
    justifyContent:'space-evenly',
    flex:1,
    

  },

  txt:{
   color:Color.light_fade,
   fontWeight:'700',
   fontSize:scale(25),
   
  },
 Btn:{
   backgroundColor:'#F15A23',
   paddingHorizontal:moderateScale(20),
   paddingVertical:moderateScale(20),
   borderRadius:moderateScale(30),
   width:'85%',
   justifyContent:'center',
   alignItems:'center',
   elevation:5
   
   
 }


})