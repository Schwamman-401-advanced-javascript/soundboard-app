import React from 'react';
import { Button } from 'react-native';
import { Audio } from 'expo-av';


function ButtonComponent(props) {
  async function playSound() {
    const audioObj = await Audio.Sound.createAsync(
      { uri: props.sound},
      { shouldPlay: true }
    )
  }


  return (
    <Button title={props.name} onPress={() => playSound()}>{props.name}</Button>
  )
}

export default ButtonComponent;