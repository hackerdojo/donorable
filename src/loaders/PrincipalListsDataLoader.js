import React from 'react';
import {useSelector } from 'react-redux';
import {ListsScreen} from "../screens";

// Use this if you want to not load the principal in your navigator.

export default function PrincipalListsDataLoader ({ navigation,route}) {
  const principal = useSelector(state=> state.principal);
  const cardDeck = useSelector(state=>state.cardDeck);
  const principalListProperty = route.params.principalListProperty;
  const listData = principal[principalListProperty].map( (id, index, data) => (
    cardDeck.indexedCards[id]
  ));

  route.params.data = listData;

  return (
    <ListsScreen
      navigation={navigation}
      route={route}
    />
  );
}

