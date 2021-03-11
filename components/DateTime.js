import React, {useState} from 'react';
import {View, Button, Platform} from 'react-native';
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
    <View style= {{
      position: "absolute",
      top: Platform.select({ ios: 20, android: 530 }),
      width: "100%",
      zIndex:1
    }}>
      <View style = {{width:'100%',flexDirection: 'row',alignContent:'center',justifyContent: 'center'}}>
      <View>
        <Button style={{width:'100%'}} onPress={showDatepicker} title="Select Date" />
      </View>
      <View>
        <Button style={{width:'100%'}} onPress={showTimepicker} title="Select Time" />
      </View>
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