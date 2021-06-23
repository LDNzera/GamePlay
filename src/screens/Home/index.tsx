import React, { useState } from "react";

import { View, Text, FlatList } from 'react-native';

import { Profile } from "../../components/Profile";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { ListDivider } from '../../components/ListDivider';
import { ListHeader } from '../../components/ListHeader';
import { Appointment } from '../../components/Appointment';

import { styles } from "./styles";

export function Home() {
  const [ category, setCategory ] = useState('')

  const appointments = [
    {
      id: '1',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '18/06 às 21:00h',
      description: 'É hoje que vamos ao challenger sem perder uma partida da md10'
    },
    {
      id: '2',
      guild: {
        id: '2',
        name: 'Yeah, boy!',
        icon: null,
        owner: false
      },
      category: '3',
      date: '23/06 às 19:00h',
      description: 'Adicionar em breve...'
    },
    {
      id: '3',
      guild: {
        id: '3',
        name: 'Rumo ao tapa',
        icon: null,
        owner: true
      },
      category: '2',
      date: '20/06 às 09:00h',
      description: 'Adicionar em breve...'
    },
    {
      id: '4',
      guild: {
        id: '4',
        name: 'Bora queimar tudo',
        icon: null,
        owner: false
      },
      category: '4',
      date: '20/06 às 14:20h',
      description: 'Adicionar em breve...'
    },
    {
      id: '5',
      guild: {
        id: '5',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '18/06 às 21:00h',
      description: 'É hoje que vamos ao challenger sem perder uma partida da md10'
    },
    {
      id: '6',
      guild: {
        id: '6',
        name: 'Yeah, boy!',
        icon: null,
        owner: false
      },
      category: '3',
      date: '23/06 às 19:00h',
      description: 'Adicionar em breve...'
    },
    {
      id: '7',
      guild: {
        id: '7',
        name: 'Rumo ao tapa',
        icon: null,
        owner: true
      },
      category: '2',
      date: '20/06 às 09:00h',
      description: 'Adicionar em breve...'
    },
    {
      id: '8',
      guild: {
        id: '8',
        name: 'Bora queimar tudo',
        icon: null,
        owner: false
      },
      category: '4',
      date: '20/06 às 14:20h',
      description: 'Adicionar em breve...'
    },{
      id: '9',
      guild: {
        id: '9',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '18/06 às 21:00h',
      description: 'É hoje que vamos ao challenger sem perder uma partida da md10'
    },
    {
      id: '10',
      guild: {
        id: '10',
        name: 'Yeah, boy!',
        icon: null,
        owner: false
      },
      category: '3',
      date: '23/06 às 19:00h',
      description: 'Adicionar em breve...'
    },
    {
      id: '11',
      guild: {
        id: '11',
        name: 'Rumo ao tapa',
        icon: null,
        owner: true
      },
      category: '2',
      date: '20/06 às 09:00h',
      description: 'Adicionar em breve...'
    },
    {
      id: '12',
      guild: {
        id: '12',
        name: 'Bora queimar tudo',
        icon: null,
        owner: false
      },
      category: '4',
      date: '20/06 às 14:20h',
      description: 'Adicionar em breve...'
    },
  ]

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd />
      </View>

      <CategorySelect 
        categorySelected={category}
        setCategory={handleCategorySelect}
      />

      <View style={styles.content}>
        <ListHeader 
          title="Partidas agendadas"
          subtitle="Total 6"
        />

        <FlatList
          data={appointments}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Appointment data={item}/>
          )}
        ItemSeparatorComponent={() => <ListDivider />}
          style={styles.matches}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}