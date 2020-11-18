import React from 'react';
import { View, Text, FlatList, TouchableOpacity} from 'react-native';
import styles from './styles';
import data from '../LearnMoreScreen/data';

export default function HomeScreenTemp ({navigation}) {
    if(!data) return null;
    return (
        <View style={styles.container}>
            <FlatList 
                data={data}
                keyExtractor={nonprofit => nonprofit.id.toString()}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity onPress={()=>navigation.navigate('LearnMore', { nonprofit: item })} >                            
                            <Text>{item.name}</Text>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
    
}

