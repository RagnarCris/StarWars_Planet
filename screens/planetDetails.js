import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';
import { MaterialIcons } from '@expo/vector-icons';

export default function PlanetDetails({ route, navigation }) {
  const [residentes, setResidentes] = useState([]);
  const [show, setShow] = useState(false);

  const showPerson = (url) => {
      fetch(`${url}/?format=json`)
        .then(res => {
          if (!res.ok) { // erro vindo do servidor
            throw Error('Pesquisa retornou erro, o CEP está correto?');
          } 
          return res.json();
        })
        .then(data => {
          const key_auto = Math.random().toString();
          console.log('Chegou no data')
          setResidentes([{...residentes}, {name: data.name, mass: data.mass, key: key_auto}]);
        })
        .catch((error) => console.error(error))
  }

  const showPeople = (residents) => {
    residents.forEach(element => {
      console.log(element);
      showPerson(element);
    });
  }
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.item}>{ "Nome: " + route.params.name }</Text>
      <Text style={globalStyles.item}>{ "Clima: " + route.params.climate }</Text>
      <Text style={globalStyles.item}>{ "Terreno: " + route.params.terrain }</Text>
      <Text style={globalStyles.item}>{ "População: " + route.params.population }</Text>
      <View style={globalStyles.itemHide}>
        <Text style={globalStyles.itemText}>Mostrar Residentes</Text>
        <TouchableOpacity onPress={() => showPeople(route.params.residents)}>
            <MaterialIcons name="play-arrow" size={30} color="black" style={globalStyles.icon}/>
        </TouchableOpacity>
      </View>
      <View style={globalStyles.list}>
          <FlatList
          data={residentes}
          renderItem={({ item }) => {
            return (
              <View>
                  <Text style={globalStyles.item}>Nome: {item.name} / Massa: {item.mass}</Text>
              </View>
            )}
          }
          />
        </View>
    </View>
  );
}