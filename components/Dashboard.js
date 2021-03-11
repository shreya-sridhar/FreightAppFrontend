
import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Dashboard from 'react-native-dashboard';

const data = [
  { name: 'Me', background: '#3498db', icon: 'user', iconColor: '#0d47a1' },
  {
    name: 'Pending Delivery',
    background: '#b71c1c',
    icon: 'gratipay',
    styleIcon: { color: '#0d47a1' },
  },
  { name: 'Delivered Items', background: '#ffeb3b', icon: 'heart' },
  {
    name: 'Spends',
    background: '#4caf50',
    icon: 'users',
    styleName: { color: '#0d47a1', fontWeight: 'bold' },
  },
  {
    name: 'Friends',
    nameColor: '#0d47a1',
    background: '#02cbef',
    icon: 'group',
  },
  { name: 'Calendars', background: '#ff5722', icon: 'calendar' },
];

export default function App() {
  const card = ({ name }) => console.log('Card: ' + name);
  return (
    <View style={styles.container}>
      <Dashboard data={data} background={true} card={card} column={2} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
});
