import React from 'react';
import ButtonComponent from './button';
import { View } from 'react-native';


function Soundboard(props) {
  return (
    <View id='soundboard'>
      {
        props.audioFiles.map(audio => (
          <ButtonComponent 
            name={audio.name}
            key={audio.name}
            sound={audio.filepath}
          />
        ))
      }
    </View>
  )
}

export default Soundboard;