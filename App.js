import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native';

export default function App() {

  const [number1, number1change] = useState("");
  const [number2, number2change] = useState("");

  const [resultNumber, setResultNumber] = useState(0);

  function fancycalc(whattodo) {
    var n1 = 0;
    if(number1.toLowerCase() == "ett") {
      n1 = 1;
    }
    if(number1.toLowerCase() == "två") {
      n1 = 2;
    }
    if(number1.toLowerCase() == "tre") {
      n1 = 3;
    }

    var n2 = 0;
    if(number2.toLowerCase() == "ett") {
      n2 = 1;
    }
    if(number2.toLowerCase() == "två") {
      n2 = 2;
    }
    if(number2.toLowerCase() == "tre") {
      n2 = 3;
    }

    if(whattodo == "plus") {
      setResultNumber(n1 + n2);
    }
    if(whattodo == "minus") {
      setResultNumber(n1 - n2);
    }

    
  }


  return (
    <View style={styles.container}>
      
      <View style={styles.resultHeader}>
        <Text style={styles.numbertext}>{ resultNumber }</Text>
      </View>
      
      <View style={styles.calcPlace}>

        <TextInput style={styles.numberinput}
          onChangeText={number1change}
          value={number1}
        />

        <TextInput style={styles.numberinput}
          onChangeText={number2change}
          value={number2}
        />

        <View style={{ backgroundColor: "#ffff00", flexDirection: "row", justifyContent: "center" }}>
          <Button title='Plus' onPress={() => {
            fancycalc("plus");
          }} />

          <Button title='Minus' onPress={() => {
            fancycalc("minus");
          }} />
        </View>
        

      </View>




      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff0000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  resultHeader: {
    backgroundColor: "#0000ff",
    width: "100%",
    height: "20%",
    alignItems: 'center',
    justifyContent: 'center',
  },
  calcPlace: {
    backgroundColor: "#00ff00",
    width: "100%",
    height: "80%"
  },
  numbertext: {
    color: "#ffffff"
  },
  numberinput: {
    borderWidth: 1,
    padding: 10,
    margin: 20,
    backgroundColor: "#dddddd",
    borderRadius: 20
  }
});
