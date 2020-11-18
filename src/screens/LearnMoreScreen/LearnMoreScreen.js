import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Modal, ScrollView, FlatList } from 'react-native';
import styles from './styles';

export default function LearnMoreScreen ({navigation}) {
    const { nonprofit } = navigation.state.params;

    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    }  

    return (    
        <View style={styles.container}> 
            <Text style={styles.name}>{nonprofit.name}</Text>  
            <View style={styles.lineStyle}></View>          
            <View style={styles.questions}>                
                <FlatList
                    data={nonprofit.questions}
                    keyExtractor={question => question.id.toString()}                
                    renderItem={({item: {question, answer}}) => {
                        return (
                            <View>
                                <TouchableOpacity onPress={toggleModal}>
                                    <Text style={styles.textQ}>{question}</Text>
                                </TouchableOpacity>
                                
                                <Modal
                                    animationType="slide"
                                    transparent={true}
                                    visible={showModal}
                                >
                                    <View style={styles.centeredModal}>
                                        <View style={styles.modalView}>                                            
                                            <Image style={styles.logoStyle} source={{uri: nonprofit.image}} />
                                            <View style ={styles.lineStyle}></View>                      
                                            <ScrollView style={styles.scroolView}>
                                                <Text style={styles.textModal}>{answer}</Text>                                                        
                                            </ScrollView>
                                            <Text style={styles.buttonModal} onPress={toggleModal}>Got it</Text>
                                        </View>
                                    </View>
                                    
                                </Modal>
                            </View>    
                        )
                    }}
                />
                <View style={styles.info}>
                    <Text>Budget:       {nonprofit.budget}</Text>
                    <Text>Org Type:     {nonprofit.type}</Text>
                    <Text>Keywords:     {nonprofit.keywords}</Text>
                </View>
            </View>                         
            <View style={styles.icons}> 
                <TouchableOpacity>
                    <Image
                        style={styles.disLikeIcon}
                        source={require("../../../assets/dislike.png")}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        style={styles.likeIcon}
                        source={require("../../../assets/like.png")}
                    />
                </TouchableOpacity>
            </View> 
        </View>
    )
}

            