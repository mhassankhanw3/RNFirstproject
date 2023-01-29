import React, {useState} from 'react';
import Header from './components/Header';
// import {uuid} from 'uuid';
import uuid from 'react-native-uuid';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import ListItem from './components/ListItem';

const App = () => {
  const [items, setItems] = useState([
    {id: uuid.v4(), title: 'Milk'},
    {id: uuid.v4(), title: 'Eggs'},
    {id: uuid.v4(), title: 'Bread'},
    {id: uuid.v4(), title: 'Butter'},
    {id: uuid.v4(), title: 'Yougurt'},
  ]);
  const deleteItem = id => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  };
  return (
    <View style={styles.container}>
      <Header title="Shopping List" />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
