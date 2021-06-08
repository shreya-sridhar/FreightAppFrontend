import React, {useState} from 'react';
import {View, Button, Platform, Dimensions, StyleSheet} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const App = (props) => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    props.getDate(selectedDate)
    setDate(currentDate);
    console.log(currentDate)
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <View style= {styles.container}>
      <View style={styles.buttonContainer}>
                <Button title="Select Date" onPress = {showDatepicker} style={{position:"absolute",bottom:"250px"}}/>
              </View>
              <View style={styles.buttonContainer}>
                <Button title="Select Time" onPress = {showTimepicker}/>
              </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      position: "absolute",
      top: Platform.select({ ios: 20, android: 700 }),
      width: "100%",
      zIndex:1
  },
  buttonContainer: {
      flex: 1,
      padding:2
  }
})
