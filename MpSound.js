import React,{useState,useEffect} from 'react';
import { Button, View } from 'react-native';
import { Text } from 'react-native';
//import DocumentPicker from 'react-native-document-picker';
import * as DocumentPicker from 'expo-document-picker';
import { Audio } from 'expo-av';
import { Sound } from 'expo-av/build/Audio';





// async function pickAudioFile() {
//     try {
//       const result = await DocumentPicker.pick({
//         type: [DocumentPicker.types.audio],
//       });
//       return result.uri;
//     } catch (error) {
//       console.log(error);
//       return null;
//     }
//   }
  





export default function MpSound({navigation}) {
    const [sound, setSound] = React.useState();

    const [filePath,setFilePath] = useState('');

    async function pickAudioFile() {
        let result = await DocumentPicker.getDocumentAsync({});
            setFilePath(result.uri)
             alert(result.uri);
             console.log("FilePath is *********" ,filePath);
    }

    async function playAudioFile() {
        console.log('Loading Sound');
        console.log(filePath)
        if (filePath==''){
            alert("please select a Song to play")
        }
        const { sound } = await Audio.Sound.createAsync({ uri: filePath });
        setSound(sound);

        console.log('Playing Sound');
        await sound.playAsync();
    }

    const PauseAudio = async () => {
        try {
          const result = await sound.getStatusAsync();
          if (result.isLoaded) {
            if (result.isPlaying === true) {
              sound.pauseAsync();
            }
            if(result.isPlaying ===false){
                sound.playAsync();
            }
          }
        } catch (error) {}
      };


      const StopAudio = async () => {
        try {
            const result = await sound.getStatusAsync();
            if (result.isLoaded) {
                console.log('Stopping Sound');
                //sound.unloadAsync();
                sound.stopAsync();
                setSound();
            }
          } catch (error) {}
      };

    React.useEffect(() => {
        return sound
          ? () => {
              console.log('Unloading Sound');
              sound.unloadAsync();
            }
          : undefined;
      }, [sound]);

    

    return(
        <View>
            <Button
                title='Click to acess MP3 Sounds'
                onPress={pickAudioFile}
            />

            <Button
                title='Play'
                onPress={playAudioFile}
            />

            <Button 
                title='Pause'
                onPress={PauseAudio} 
            />

            <Button
                title='Stop'
                onPress={StopAudio} 
            />

        </View>
    )
}

