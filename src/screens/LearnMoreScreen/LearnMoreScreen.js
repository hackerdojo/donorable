import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Modal, ScrollView } from 'react-native';
// import { ScrollView } from 'react-native-gesture-handler';
import styles from './styles';

export default function LearnMoreScreen(){
    const [showModal, setShowModal] = useState(false)

    const toggleModal = () => {
        setShowModal(!showModal)
    }    

    return (
        <View style={styles.container}>
            <View>
            <View style = {styles.lineStyle}>
                <Text style={styles.name}>Hacker Dojo</Text>
            </View>

            <View style={styles.questions}>
            <TouchableOpacity onPress={toggleModal}>
                <Text style={styles.textQ}>What we aim to solve?</Text>
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
                            <Text style={styles.textModal}>There are three types of groups that benefit from the existence of Hacker Dojo. The first group is for individuals looking to improve their career path or up their skill set in software and hardware. The second group is the entrepreneurs with little to no funding looking to get help from the community, build their minimal viable product, test and iterate on their project. Having community support during this early volatile state is crucial to the success of a project. Our events help both of these two groups by allowing them to connect to our members and the broader tech community. Many of our events are free of charge and free for members to host as well as attend. The third group is the international tech community. Silicon Valley doesn't have many places that welcome anyone and everyone to learn and talk about tech. We host many international students that are getting their very first experience in Silicon Valley every summer mainly but also all year around.</Text>
                        
                        </ScrollView>
                        <Text style={styles.buttonModal} onPress={toggleModal}>Got it</Text>
                    </View>
                </View>
                
            </Modal>
            
            <Text style={styles.textQ}>Where we work?</Text>
            <Text style={styles.textQ}>Where we serve?</Text>
            <Text style={styles.textQ}>Our programs?</Text>
            <Text style={styles.textQ}>Poplulation(s) served?</Text>
            <Text style={styles.textQ}>Our results?</Text>
            <Text style={styles.textQ}>Charting impact?</Text>
            <Text style={styles.textQ}>Where the money goes?</Text>
            </View>

            <View style={styles.info}>
                <Text>Budget:       $491,679</Text>
                <Text>Org Type:     501(c)(3)</Text>
                <Text>Keywords:     community center, technology</Text>
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
                        source={require("../../../assets/heart.png")}
                    />
                </TouchableOpacity>
            </View>     
            </View>
            
            
        </View>
    )
    }

