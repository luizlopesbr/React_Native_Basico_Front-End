import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import {useState} from "react";
import {useNavigation} from "@react-navigation/native";


import PhoneHang from '../assets/icons/phone_hang_up.png'






export default function TelaLigacao({route}) {

  const {photo, name, phone} = route.params;

  const navigation = useNavigation();

  const [phone_mic,setphone_mic] = useState(require('../assets/icons/phone_mic.png'));
  const [phone_paused,setphone_paused] = useState(require('../assets/icons/phone_paused.png'));
  const [phone_volume_up,setphone_volume_up] = useState(require('../assets/icons/phone_volume_up.png'));

 
  return (
    <View style={styles.container1}>
        
      <View style={styles.container2}>
        <Text style={styles.textLigando}>Ligando</Text>
      </View>


      <View style={styles.container3}>
        <Image source={photo} style={styles.imgFotoPerfil}/>
      </View>

        
      <View style={styles.container4}>
        <Text style={styles.textNomePerfil}>{name}</Text>
        <Text style={styles.textFonePerfil}>{phone}</Text>
      </View>

      <View style={styles.container5}>

        <TouchableOpacity onPress={() => setphone_mic(require('../assets/icons/phone_mic_selected.png'))}>
          <Image source={phone_mic}/>
        </TouchableOpacity>


        <TouchableOpacity onPress={() => setphone_paused(require('../assets/icons/phone_paused_selected.png'))}>
        <Image source={phone_paused}/>
        </TouchableOpacity>


        <TouchableOpacity onPress={() => setphone_volume_up(require('../assets/icons/phone_volume_up_selected.png'))}>
        <Image source={phone_volume_up}/>
        </TouchableOpacity>



      </View>

      <View style={styles.container6}>
        <TouchableOpacity onPress={()=>{navigation.navigate("TelaInicial")}}>
        <Image source={PhoneHang} style={styles.iconPhoneHang}/>
        </TouchableOpacity>
      </View>

    </View>

    
  )
}

const styles = StyleSheet.create({
    container1:{
        backgroundColor: '#fff'

    },
    container2:{
        
        alignItems: 'center'

    },
    textLigando:{
        
    },
    container3:{
        alignItems: 'center'

    },
    imgFotoPerfil:{
        marginTop: 180,
        width: 190,
        height: 190,
        borderRadius: 100
    },
    container4:{
        alignItems: 'center'

    },
    textNomePerfil:{
        fontWeight: 700,
        fontSize: 17,
        marginTop: 10
    },
    textFonePerfil:{
        marginBottom: 60
    },
    container5:{
      
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around'



    },

    textLigando:{
        fontSize: 18,
        fontWeight: 700,

    },
    container6:{
        alignItems:'center'
    },
    iconPhoneHang:{
        marginTop: 80
    }





})