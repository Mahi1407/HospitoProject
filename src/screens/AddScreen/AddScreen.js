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
import CustomInput from '../../components/CustomInput';
import {useForm, Controller} from 'react-hook-form';
import CustomButton from '../../components/CustomButton';
function AddScreen(props){
    const navigation = useNavigation();
    const Adduser=(data)=>{
        console.log(data);
        axios.post('https://hospito-assginment.herokuapp.com/api/assignment', {
            name: data.name,
            email: data.Email,
            role: data.Role,
        })
        .then(function (response) {
            console.log(response.data);
            onAdd();

        })
          .catch(function (error) {
            console.log(error);
        });
        
    }
    
    const onAdd=()=>{
        navigation.navigate('User Profiles');
    }
    const {
        control,
        handleSubmit,
        formState: {errors},
    } = useForm();
    return(
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <CustomInput
                    name="name"
                    placeholder="name"
                    control={control}
                    rules={{required: 'name is required'}}
                />
                <CustomInput
                    name="Email"
                    placeholder="Email"
                    control={control}
                    rules={{required: 'Email is required'}}
                />
                <CustomInput
                    name="Role"
                    placeholder="Role"
                    control={control}
                    rules={{required: 'Role is required'}}
                />
            </View>
            <CustomButton text="Add" onPress={handleSubmit(Adduser)} />
        </ScrollView>
    )
  }
  const styles = StyleSheet.create({
    root: {
      flex:1,
      justifyContent:'center',
      alignItems: 'center',
      padding: 20,
    },
  });
  
  export default AddScreen;