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
  ToastAndroid
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import { useIsFocused } from '@react-navigation/native';
import axios from 'axios';

import TextAvatar from "react-native-text-avatar";
import {
  Avatar,
  Title,
  Caption,
  TouchableRipple,
} from 'react-native-paper';

import Navigation from '../../navigation';


function EditScreen(props){
  console.log(props.route.params.data);
  const navigation = useNavigation();
  const [nam,setnam] = React.useState({boo: false ,})
  const [tempnam, setTempnam] = React.useState(props.route.params.data.name)
  const [ema,setema] = React.useState({boo: false ,})
  const [tempema, setTempema] = React.useState(props.route.params.data.email);
  const [rol,setrol] = React.useState({boo: false ,})
  const [temprol, setTemprol] = React.useState(props.route.params.data.role);

  const Edit=()=>{
//setloader(true);
axios.put(
'https://hospito-assginment.herokuapp.com/api/assignment/'+props.route.params.data.id,{name:tempnam,email:tempema,role:temprol}
).then((response) => {
  console.log(response);
  console.log("here inside");

  console.log(response.data);
  
  props.navigation.navigate('User Profiles')

 // setloader(false);
});

  }
  return(
    <ScrollView>
        <View style={[styles.aaaa,{backgroundColor:'#00000000'}]}>
          <View style={{flex:1}}>
                  <View style={styles.container}>
                        <View style={{flexDirection:'row',flex:3}}>
                            <View style={{flex:1}}>
                              <Text style={{textAlign:'center',marginTop:11,fontSize:18}}>Name:</Text>
                           </View>
                           <View style={{flex:2}}>
                            <Input  w={{
                              base: "95%",
                              md: "25%"
                            }} editable={nam.boo} InputLeftElement={<Icon as={<MaterialIcons name="person" />} size={5} ml="2" color="blue.700" />} value={tempnam} onChangeText={nextValue => setTempnam(nextValue)} />
                            </View>
                        </View>
                        <View style={{flex:1}}>
                          <Box style={{width:"100%",marginTop:3.5, height: 40}}>
                              <Button  onPress={() => { 
                                setnam({booo: true})
                              }
                            }>Edit</Button>
                          </Box>
                        </View>
                </View>
                <View style={styles.container}>
                        <View style={{flexDirection:'row',flex:3}}>
                          <View style={{flex:1}}>
                              <Text style={{textAlign:'center',marginTop:11,fontSize:18}}>Email:</Text>
                           </View>
                           <View style={{flex:2}}>
                              <Input  w={{
                                base: "95%",
                                md: "25%"
                              }} editable={ema.boo} value={tempema} onChangeText={nextValue => setTempema(nextValue)} />
                            </View>
                        </View>
                        <View style={{flex:1}}>
                          <Box style={{width:"100%",marginTop:3.5, height: 40}}>
                              <Button  onPress={() => { 
                                setema({boo: true})
                              }
                            }>Edit</Button>
                          </Box>
                        </View>
                </View>
                <View style={styles.container}>
                        <View style={{flexDirection:'row',flex:3}}>
                           <View style={{flex:1}}>
                              <Text style={{textAlign:'center',marginTop:11,fontSize:18}}>Role :</Text>
                           </View>
                           <View style={{flex:2}}>
                              <Input  w={{
                                base: "95%",
                                md: "25%"
                              }} editable={rol.boo} value={temprol} onChangeText={nextValue => setTemprol(nextValue)} />
                            </View>
                        </View>
                        <View style={{flex:1}}>
                          <Box style={{width:"100%",marginTop:3.5, height: 40}}>
                              <Button  onPress={() => { 
                                setrol({boo: true})
                              }
                            }>Edit</Button>
                          </Box>
                        </View>
                </View>
            </View>
            <View style={{flex:1,margin: 10,marginTop:20,marginLeft:30}}>
                    <Box style={{width:"30%",}}>
                        <Button onPress={() => { 
                          Edit();
                    
                        }
                      }>Save</Button>
                    </Box>
            </View>
          </View>
          <View style={{flex:1}}></View>
        </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    flexDirection: "row",
    backgroundColor: '#0000',
    
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  aaaa: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#0000',
   },
}
)
export default EditScreen;