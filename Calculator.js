import { StatusBar } from 'expo-status-bar';
import { Button, Pressable, ScrollView, TextInput } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { Numbers } from './dummyData';
import React,{useState,useEffect} from 'react';
import { evaluate } from 'mathjs';

export default function Calculator({navigation}) {
    const [numbersArray,setNumbersArray] = useState(Numbers);
    const [textInput,setTextInput] = useState('');
    const [number,setNumber] = useState('');


    const handlePress = (newText) => {
    setTextInput((prevText) => prevText + newText);
  };

  const handleClearLast = () => {
    setTextInput((prevText) => prevText.slice(0, -1));
  };

  const submit = () => {

      try{
        const result = evaluate(textInput)
        setTextInput(JSON.stringify(result))
      }catch(err){
       console.log(err)
       alert("Invalid Format")
      }
  }


  return (
    <View style={styles.container}>

    <View>
        <Button
            title="Go to MP3 Sound PLAYER"
            onPress={() =>
                navigation.navigate('MpSound')
            }
        />
    </View>

     <View style={styles.calculatorView}>
     <View style={{backgroundColor:"",flexDirection:"row",borderColor:"grey",borderWidth:5,borderRadius:20,}}>
        <ScrollView horizontal = {true}>
            <TextInput editable={false} style={{color:"black",padding:10}} value={textInput}>
            </TextInput>
        </ScrollView>
         
      </View>
      <View style={styles.firstRow}>
        <Pressable style={styles.button} onPress={() => handlePress('1')}>
          <Text>
            1
          </Text>
        </Pressable>
        <Pressable style={styles.button} onPress={()=>{handlePress("2")}}>
          <Text>
            2
          </Text>
        </Pressable>
        <Pressable style={styles.button} onPress={()=>{handlePress("3")}}>
          <Text>
            3
          </Text>
        </Pressable>
        <Pressable style={styles.button} onPress={()=>{handlePress("+")}}>
          <Text>
            +
          </Text>
        </Pressable>
      </View>

      <View style={styles.secondRow}>
        <Pressable style={styles.button} onPress={()=>{handlePress("4")}}>
          <Text>
            4
          </Text>
        </Pressable>
        <Pressable style={styles.button} onPress={()=>{handlePress("5")}}>
          <Text>
            5
          </Text>
        </Pressable>
        <Pressable style={styles.button} onPress={()=>{handlePress("6")}}>
          <Text>
            6
          </Text>
        </Pressable>
        <Pressable style={styles.button} onPress={()=>{handlePress("-")}}>
          <Text>
            -
          </Text>
        </Pressable>
      </View>
      

      <View style={styles.thirdRow} >
        <Pressable style={styles.button} onPress={()=>{handlePress("7")}}>
          <Text>
            7
          </Text>
        </Pressable  >
        <Pressable style={styles.button} onPress={()=>{handlePress("8")}}>
          <Text>
            8
          </Text>
        </Pressable>
        <Pressable style={styles.button} onPress={()=>{handlePress("9")}}>
          <Text>
            9
          </Text>
        </Pressable>
        <Pressable style={styles.button} onPress={submit}>
          <Text>
            =
          </Text>
        </Pressable>
      </View>

      
      
      <View style={styles.fourthRow}>
        <Pressable style={styles.button} onPress={()=>{handlePress("0")}}>
          <Text>
            0
          </Text>
        </Pressable >
        <Pressable style={styles.button} onPress={()=>{handlePress("*")}}>
          <Text>
            *
          </Text>
        </Pressable>
        <Pressable style={styles.button} onPress={()=>{handlePress("(")}}>
          <Text>
            (
          </Text>
        </Pressable>
        <Pressable style={styles.button} onPress={()=>{handlePress(")")}}>
          <Text>
            )
          </Text>
        </Pressable>
      </View>

      <View style={styles.fifthRow}>
        <Pressable style={styles.button} onPress={()=>{setTextInput("")}}>
          <Text style={{color:"red"}}>
            C
          </Text>
        </Pressable >
        <Pressable style={styles.button} onPress={()=>{handlePress("/")}}>
          <Text>
          {'\u00F7'}
          </Text>
        </Pressable>
        <Pressable style={styles.button} onPress={()=>{handlePress("%")}}>
          <Text>
            %
          </Text>
        </Pressable>
        <Pressable style={styles.button} onPress={handleClearLast}>
          <Text>
            back
          </Text>
        </Pressable>
      </View>
     
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  calculatorView:{
    flexDirection:"column",
    borderRadius:10,
    borderColor:"black",
    borderWidth:1,
    padding:30
  },
  firstRow:{
    flexDirection:"row",
    marginVertical:10,
    width:"50%"
  },
  secondRow:{
    flexDirection:"row",
    marginVertical:10,
    width:"50%"
  },
  thirdRow:{
    flexDirection:"row",
    marginVertical:10,
    width:"50%"
  },
  fourthRow:{
    flexDirection:"row",
    marginVertical:10,
    width:"50%"
  },
  fifthRow:{
    flexDirection:"row",
    marginVertical:10,
    width:"50%"
  },
  button:{
    width:"33%",
    //backgroundColor:"lightgrey",
    padding:10
  }
});



