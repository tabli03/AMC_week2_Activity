import React from 'react';
import {View, Text, Image, ScrollView, TextInput} from 'react-native';

const App = () => {
  return (
  <ScrollView>
    <Text style={{ textAlign: "center",}}>Tablizo, Arwyn M.</Text>
      <View>
      
        <Text style={{ textAlign: "center",}}>IT-302</Text>
        <Image
        source={{
          uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4YSf8ooq1wgigaFQe9hlAiPXXYhxEfJ7ljA&s'
        }}
        style={{width: 200,
         height: 200,
         alignSelf: 'center',
         }}
        />
        </View>
        <TextInput
        style={{
          height: 50,
          borderColor: 'gray',
          borderWidth: 1,
          alignSelf: 'center'
        }}
        defaultValue="You can type in me"/>
        </ScrollView>
  );  
};

export default App;