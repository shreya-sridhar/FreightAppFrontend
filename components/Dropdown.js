import * as React from 'react';
import { Text, View, StyleSheet, FlatList, Platform } from 'react-native';
import Constants from 'expo-constants';

// DropDownPicker
import DropDownPicker from "react-native-dropdown-picker";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        React native dropdown picker
      </Text>

      <View
        style={{

          // The solution: Apply zIndex to any device except Android
          ...(Platform.OS !== 'android' && {
            zIndex: 10
          })
          
        }}
      >
        <DropDownPicker
          items={[
            { label: 'UK', value: 'uk' },
            { label: 'France', value: 'france' },
            { label: 'Germany', value: 'germany' },
          ]}
          placeholder="Select a country"
          containerStyle={{height: 40}}
          style={{ backgroundColor: '#ffffff' }}
          dropDownStyle={{ backgroundColor: 'white' }}
        />
      </View>
    
      <FlatList
        data={[
          {title: '1. Das Leben ist nicht fair'},
          {title: '2. Wir werden trotzdem sterben'},
          {title: '3. Aber lass uns so leben, wie wir wollen'},
          {title: '4. Das ist besser'},
        ]}
        renderItem={(item, index) => <Text>{item.item.title}</Text>}
        keyExtractor={(item, index) => index.toString()}
        style={{
          marginTop: 40
        }}
        contentContainerStyle={{
          borderRadius: 5,
          padding: 15,
          backgroundColor: 'red'
        }}
      />


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
