import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native'
import React from 'react'
import {useNavigation} from "@react-navigation/native";


import contacts from './mocks/contact'

import phone from "../assets/icons/phone.png"

export default function TelaInicial() {
  const navigation = useNavigation();
  return (
    <View style={styles.container1}>
        
      <View style={styles.container2}>
        <Text style={styles.textCaller}>Caller APP</Text>
        <Text style={styles.textOla}>Olá Bem-Vindos</Text>
        <Text style={styles.textLigue}>Ligue gratis para seus amigos.</Text>

      </View>

      <View style={styles.container3}>
        <TouchableOpacity>
            <Text onPress={() => navigation.navigate('TelaLigacao')}></Text>
        </TouchableOpacity>
        <View>
           <Text style={styles.textContatos}>Contatos</Text>
        </View>
          
      </View>

      

      <View style={styles.list}>
        <FlatList
          data = {contacts}
          renderItem={({item}) => (
              <TouchableOpacity style={styles.containerListaContatos} onPress={()=> navigation.navigate('TelaLigacao', {name: item.name, photo: item.photo, phone: item.phone })}>
                  <View>
                      <Image source={item.photo} style={styles.fotoJogador}/>
                  </View>
                  <View>
                      <Text style={styles.grupoContatoName}>{item.name}</Text>
                      <Text style={styles.grupoContatoPhone}>{item.phone}</Text>
                  </View>
                  <Image style={styles.grupoPhone} source={phone}/>
              </TouchableOpacity>
              
          )}
          keyExtractor={item => item.name}
          
          />
      </View>

    </View>

    
  )
}

const styles = StyleSheet.create({

    list:{
      height: '75%',
      backgroundColor: '#fff',
     
    },
    
    container1:{
      backgroundColor: '#fff'

    },
    container2:{
        backgroundColor: '#bdc3c7',

    },
    container3:{


    },
    textCaller:{
        color: '#fff',
        fontSize: 30,
        fontWeight: 700,
        
    },
    textOla:{
        color: '#fff',
        fontSize: 30,
        fontWeight: 700,
        marginLeft: 30,
        marginTop: 10
    },
    textLigue:{
        color: '#fff',
        fontSize: 17,
        marginTop: 7,
        marginLeft: 30,
        marginBottom: 20
    },
    textContatos:{
        fontSize: 23,
        fontWeight: 700,
        marginTop: 20,
        marginLeft: 15
    },
    fotoJogador:{
      width: 70,
      height: 70,
      borderRadius: 100,
      marginLeft: 10,
      marginTop: 8,
      marginBottom: 8

    },
    grupoContatoName:{
      fontWeight: 700,
      fontSize: 20,
      marginTop: 15,
      marginLeft: 15
    },
    grupoContatoPhone:{
      fontSize: 19,
      marginLeft: 15
    },
    containerListaContatos:{
      flexDirection: 'row',
      backgroundColor: '#F6F6F6',
      width: '90%',
      marginLeft: 20,
      marginBottom: 15,
      borderRadius: 10
      
    },
    grupoPhone:{
      marginTop: 20,
      marginLeft: 30
    }

})