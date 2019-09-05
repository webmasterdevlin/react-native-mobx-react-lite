import React from 'react';
import {StyleSheet, Alert, View, Text, Button} from 'react-native';
import {useNavigation} from 'react-navigation-hooks';

export default function TodoList() {
  const {navigate} = useNavigation();

  return (
    <Button
      onPress={() => {
        navigate('todoDetail');
      }}
      title="Go todo detail"
    />
  );
}
