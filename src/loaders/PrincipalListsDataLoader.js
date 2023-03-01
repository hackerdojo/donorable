import React from 'react';
import {useSelector } from 'react-redux';
import {ListsScreen} from "../screens";

export default function PrincipalListsDataLoader ({ navigation,route}) {
  const principal = useSelector(state=> state.principal);
  const cards = useSelector(state=>state.cardDeck);
  alert(JSON.stringify(route));
  const principalListProperty = route.params.principalListProperty;
  const listData = principal[principalListProperty].map( (id, index, data) => (
    cards.indexedCards[id]
  ));

  return (
    <ListsScreen
      navigation={navigation}
      route={{...route, data:listData}}
      initialParams = {{
        addToListVerb : route.params.addToListVerb,
      }}
    />
  );
}

