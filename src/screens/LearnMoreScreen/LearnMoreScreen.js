import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Modal, ScrollView, FlatList } from 'react-native';
// import { ScrollView } from 'react-native-gesture-handler';
import styles from './styles';
import data from './data';

export default LearnMoreScreen = () => {
    const [showModal, setShowModal] = useState(false)

    const toggleModal = () => {
        setShowModal(!showModal)
    }    

    return (
        <View style={styles.container}>
             <FlatList 
                // showsHorizontalScrollIndicator={false}
                data={data}
                keyExtractor={organization => organization.id}
                renderItem={({name, budget, type, questions}) => {
                    return (
                        <View>
                            <View style = {styles.lineStyle}>
                                <Text style={styles.name}>{name}</Text>
                            </View>
                
                            <View style={styles.questions}>
                                <FlatList
                                    keyExtractor={question => question.id}
                                    data={questions}
                                    renderItem={(item) => {
                                        return (
                                            <View>
                                                <TouchableOpacity onPress={toggleModal}>
                                                    <Text style={styles.textQ}>{item.question}</Text>
                                                </TouchableOpacity>
                                                
                                                <Modal
                                                    animationType="slide"
                                                    transparent={true}
                                                    visible={showModal}
                                                >
                                                    <View style={styles.centeredModal}>
                                                        <View style={styles.modalView}>
                                                            <View style = {styles.lineStyle}>
                                                                <Image style={styles.logoStyle} source={require("../../../assets/hackerdojo.png")} />
                                                            </View>                      
                                                            <ScrollView style={styles.scroolView}>
                                                                <Text style={styles.textModal}>{question.answer}</Text>                                                            
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
                                    <Text>Budget:       {budget}</Text>
                                    <Text>Org Type:     {type}</Text>
                                    <Text>Keywords:     community center, technology</Text>
                                </View>
                            </View>                   
                        </View>
                        
                    )
                }}
            />
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
                            source={require("../../../assets/heart.png")}
                        />
                    </TouchableOpacity>
                </View> 
        </View>
    )
}

            