import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

const CustomButton = ({onPress, text, type = 'PRIMARY', bgColor, fgColor}) => {
  return (
    <Pressable
    android_ripple={{color:"black",foreground:true}}
      onPress={onPress}
      style={[
        styles.container,
        styles[`container_${type}`],{zIndex: 0.5, },
        bgColor ? {backgroundColor: bgColor} : {},
      ]}>
       
      <Text
        style={[
          styles.text,
          styles[`text_${type}`],
          fgColor ? {color: fgColor} : {},
        ]}>
        {text}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
   /* width: '100%',

    padding: 12,
    marginVertical: 5,

    alignItems: 'center',
    // borderRadius: 5,*/
    width: '20%',
    fontSize: 30,
    borderColor: '#2e64e5',
    borderWidth: 0,
    borderRadius: 3,
    paddingVertical: 12,
    paddingHorizontal: 12,
    marginHorizontal: 5,
    marginLeft: 20,
    alignItems: 'center',
    textAlign: 'center',
  },

  container_PRIMARY: {
    backgroundColor: '#3B71F3',
  },

  container_SECONDARY: {
    borderColor: '#3B71F3',
    borderWidth: 2,
  },

  container_TERTIARY: {},

  text: {
    fontWeight: 'bold',
    color: 'white',
  },

  text_SECONDARY: {
    color: '#3B71F3',
  },

  text_TERTIARY: {
    color: 'gray',
  },
});

export default CustomButton;
