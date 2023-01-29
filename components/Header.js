import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default function Header({title}) {
  const styles = StyleSheet.create({
    header: {
      backgroundColor: 'darkslateblue',
      padding: 20,
      maxWidth: '100%',
      width: '100%',
    },
    head: {
      color: 'white',
      fontSize: 23,
      textAlign: 'center',
    },
  });
  return (
    <View style={styles.header}>
      <Text style={styles.head}>{title}</Text>
    </View>
  );
}
