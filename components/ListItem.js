import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export default function ListItem({item, deleteItem}) {
  const styles = StyleSheet.create({
    listItem: {
      backgroundColor: '#f8f8f8',
      padding: 25,
      borderBottomWidth: 1,
      borderColor: '#eee',
    },
    listItemView: {
      border: '1px',
      borderColor: 'black',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    listItemText: {
      color: 'black',
      fontSize: 18,
    },
  });
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
        <View>
          <Text style={styles.listItemText}>{item.title}</Text>
        </View>
        <View>
          <Icon
            onPress={() => deleteItem(item.id)}
            name="meho"
            size={24}
            color="#dc2626"
          />
        </View>
      </View>
    </TouchableOpacity>
  );
}
