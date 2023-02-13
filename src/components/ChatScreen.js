import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import {FormButton} from "./index";
import styleguide from "../../styles/styleguide";

const ChatScreen = ({chatee}) => {
  const styles = StyleSheet.create(styleguide);

  const [messages, setMessages] = useState([
    {type: 'response', text: 'Hi, how can I help you today?', date: '2022-01-01'},
    {type: 'question', text: 'I need help with my order.', date: '2022-01-02'},
    {
      type: 'response',
      text: 'Sure, I can helpasdf asdf asdfa asdf asdsfasdf with that. What seems to be the problem?',
      date: '2022-01-03'
    },
  ]);
  const [text, setText] = useState('');

  const onSendMessage = () => {
    setMessages([...messages, {type: 'question', text, date: new Date().toISOString().slice(0, 10)}]);
    setText('');
  };

  return (
    <>
      <View style={{flex: 10, flexDirection: 'row', padding: 10}}>
        <KeyboardAwareScrollView>
          {messages.map((message, index) => (
            <View
              key={index}
              style={
                {
                  flexDirection: 'row',
                  marginVertical: 10,
                  justifyContent: message.type === 'response' ? 'flex-start' : 'flex-end',
                }}>
              {message.type === 'response' && (
                <Image
                  source={{uri: chatee.image}}
                  style={{width: 20, height: 20, marginRight: 10}}
                />
              )}
              <View
                style={{
                  backgroundColor: message.type === 'response' ? '#E0E0E0' : '#007AFF',
                  padding: 10,
                  maxWidth: "90%",
                  borderRadius: 15,
                  alignItems: message.type === 'response' ? 'flex-start' : 'flex-end',
                }}
              >
                <Text style={{color: message.type === 'response' ? 'black' : 'white'}}>{message.text}</Text>
                <Text style={{
                  color: message.type === 'response' ? 'black' : 'white',
                  fontSize: 10,
                  marginTop: 5
                }}>{message.date}</Text>
              </View>
            </View>
          ))}
        </KeyboardAwareScrollView>
      </View>
      <View style={{flex: 1, flexDirection: 'row', padding: 10}}>
        <TextInput
          value={text}
          onChangeText={text => setText(text)}
          style={{borderColor: "grey", flex: 1, padding: 10, backgroundColor: 'white', borderRadius: 20}}
        />
        <TouchableOpacity onPress={onSendMessage} style={{
          backgroundColor: "lightgrey",
          borderColor: "lightgrey",
          borderWidth: 4,
          borderRadius: 15,
          marginLeft: 5,
          padding: 3
        }}>
          <Text>Send</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default ChatScreen;
