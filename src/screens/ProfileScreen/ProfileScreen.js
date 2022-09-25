import React, {useState, useEffect, useContext} from 'react';
import 'react-native-gesture-handler';
import { ApplicationProvider } from '@ui-kitten/components';
import { NativeBaseProvider,  Box ,Input,Icon,Button,Center, Column } from 'native-base';
import { MaterialIcons } from "@expo/vector-icons";
import * as eva from '@eva-design/eva';

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Pressable,
  TextInput,
  Alert,
  ToastAndroid,ActivityIndicator
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';

import { useIsFocused } from '@react-navigation/native';

import TextAvatar from "react-native-text-avatar";
import {
  Avatar,
  Title,
  Caption,
  TouchableRipple,
} from 'react-native-paper';
import axios from 'axios';
import Navigation from '../../navigation';

function ProfileScreen(props){
  //const navigation = useNavigation();
  const [data,setdata]=useState([]);
  const [loader,setloader]=useState(false);
  const update=()=>{
      setloader(true);
    axios({
      method: 'get',
      url: 'https://hospito-assginment.herokuapp.com/api/assignment',
    }).then((response) => {
     // console.log(response.data);
      setdata(response.data);
      setloader(false);
    });
  }
  React.useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
    update();
     
    });

    return unsubscribe;
  }, [props.navigation]);
  const onEdit=(item)=>{
    
  }
  const onDelete=()=>{
    //navigation.navigate('Add');
  }
  const onAdd=()=>{
    props.navigation.navigate('Add User');
  }
  return(<>
    {loader===true?<View style={{flex:1,justifyContent:'center'}}>
      <ActivityIndicator size="large" color={"#0000ff"}/>
    </View>:
    <View style={{flexDirection :'column',flex:1,}}>
      <View style={{height:20}}></View>
      <View style={{flexDirection:'row'}}>
          <View style={{flex:2}}></View>
          <View style={{flex:1}}>
              <TouchableOpacity
                    style={styles.userBtn1}
                    onPress={onAdd}>
                  <Text style={styles.userBtnTxt}>ADD USER</Text>
              </TouchableOpacity>
          </View>
      </View>
    <ScrollView style={{ backgroundColor: '#0000',padding:10,flex:2}}>
      <SafeAreaView style={{backgroundColor: '#0000'}}>
        {data.map((item,index)=>{
          return (
          <View key={index} style={{backgroundColor:"#0000",height:100,flexDirection:'row',borderColor:'#20b2aa',borderWidth:2,borderRadius:10,margin:5}}>
            <View style={{flex:0.1}}></View>
            <View styile={{flex:1}}>
              <View style={{height:1,marginTop:5}}></View>
                <TextAvatar
                  backgroundColor={'#20b2aa'}
                  textColor={'#fff'}
                  size={80}
                  type={'circle'} // optional
                >{item.name}</TextAvatar>
            </View>
            <View style={{flex:2,flexDirection:'column',marginTop:8}}>
            <View style={{flex:0.1}}></View>
                <View style={{marginLeft:10, flex:2}}>
                    <Text style={{fontSize:14}}>User Name : {item.name}</Text>
                    <Text style={{fontSize:14}}>Email-id : {item.email}</Text>
                    <Text style={{fontSize:14}}>Role : {item.role}</Text>
                </View>
                <View style={{flex:5}}></View>
                <View style={{flex:2,flexDirection:'row',}}>
                  <View style={{flex:0.1}}></View>
                    <View style={{flex:2}}>
                          <TouchableOpacity
                              style={styles.userBtn}
                              onPress={()=>{
                                props.navigation.navigate('Profile',{data:item});
                              }}>
                            <Text style={styles.userBtnTxt}>Edit</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:0.5}}></View>
                    <View style={{flex:2}}>
                        <TouchableOpacity
                                  style={styles.userBtn}
                                  onPress={async()=>{
                                    await axios.delete(' https://hospito-assginment.herokuapp.com/api/assignment/'+item.id);
                                    update();

                                  }}>
                                <Text style={styles.userBtnTxt}>Delete</Text>
                            </TouchableOpacity>
                    </View>
                    <View style={{flex:1}}></View>
                </View>
                <View style={{height:15}}></View>
            </View>
          </View>
          
        );
        })}
        <View style={{height:15}}></View>
      </SafeAreaView>

    </ScrollView>
    </View>}</>
  )
}
const styles = StyleSheet.create({
  userBtn: {
    borderColor: '#20b2aa',
    borderWidth: 2,
    borderRadius: 3,
    paddingLeft:20,
    textAlign:'justify',
    alignContent: 'space-between',
    marginHorizontal: 5,
    width:85,
    height:25,
    backgroundColor:'#20b2aa'
  },
  userBtn1: {
    borderColor: '#20b2aa',
    borderWidth: 2,
    borderRadius: 3,
    paddingLeft:25,
    height:50,
    marginTop:0,
    width:95,
    paddingRight:8,
    textAlign:'justify',
    alignContent: 'space-between',
    marginHorizontal: 5,
    backgroundColor:'#20b2aa'
  },
  userBtnTxt: {
    color: '#ffff',
    fontSize:15,
  }
}
)
export default ProfileScreen;