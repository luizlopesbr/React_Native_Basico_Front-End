import { StatusBar, SafeAreaView, Text , View, StyleSheet} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import Routes from './src/Routes/Routes';



export default function App() {


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="auto" barStyle={'dark-content'} backgroundColor={'white'} />


      <NavigationContainer screenOptions={{ headerShown: false }}>
        <Routes/>
      </NavigationContainer>


    </SafeAreaView>
      
    
  );
}


const styles = StyleSheet.create({

})