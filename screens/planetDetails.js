import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { globalStyles } from '../styles/global';

export default function PlanetDetails({ route, navigation }) {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.item}>{ "Nome: " + route.params.name }</Text>
      <Text style={globalStyles.item}>{ "Clima: " + route.params.climate }</Text>
      <Text style={globalStyles.item}>{ "Terreno: " + route.params.terrain }</Text>
      <Text style={globalStyles.item}>{ "População: " + route.params.population }</Text>
    </View>
  );
}