import React, { useState, useEffect } from 'react';
import { View, FlatList, TouchableWithoutFeedback, Keyboard, Text, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';
import { MaterialIcons } from '@expo/vector-icons';

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

export default function Home({ navigation }) {
    const [fontsLoaded, setFontsLoaded] = useState(false);
    const [isLoading, setLoading] = useState(true);
    const [planets, setPlanets] = useState([]);
    
    useEffect(() => { 
         // Feito pra percorrer de fato todos os planetas, mas ta bugando o FlatList, talvez pela quantidade de planetas, 
         // ou pelo then do fetch realizar um segundo for aparentemente.
         /* var i = 1;
         for (; i <= 60; i++) {
            console.log(`Passando pelo planeta ${i}`);
            fetch(`https://swapi.dev/api/planets/${i}/?format=json`)
                .then(res => {
                if (!res.ok) { // erro vindo do servidor
                    throw Error('Algo deu errado na pesquisa, talvez a API esteja fora do ar...');
                }
                return res.json();
                })
                .then(data => {
                data.key = Math.random().toString();
                setPlanets([...planets, data]);
                console.log(`Planeta: ${data.name}`)
                //planets.push(data);
                })
                .catch((error) => console.error(error))
                .finally(() => setLoading(false));
        } */
        fetch(`https://swapi.dev/api/planets/?format=json`)
            .then(res => {
            if (!res.ok) { // erro vindo do servidor
                throw Error('Algo deu errado na pesquisa, talvez a API esteja fora do ar...');
            }
                return res.json();
            })
            .then(data => {
                data.results.forEach(element => {
                    element.key = Math.random().toString();
                });
                setPlanets(data.results);
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, [])

    return ( 
            <View style={globalStyles.container}>
                {isLoading ? <Text style={{ fontSize: 20 }}>Carregando...</Text> : (
                    <View style={globalStyles.content}>
                        <FlatList
                        data={planets}
                        renderItem={({ item }) => (
                            <View style={globalStyles.item}>
                                <Text style={globalStyles.itemText}>{item.name + " / hab: " + item.population}</Text>
                                <TouchableOpacity onPress={() => navigation.navigate('PlanetDetails', item)}>
                                    <MaterialIcons name="arrow-forward" size={20} color="black" />
                                </TouchableOpacity>
                            </View>
                        )}
                        />
                    </View>
                )}
            </View>
    );
}

