//import React, { Component } from 'react';
//import { Text, View } from 'react-native';
//import { AppRegistry, Image } from 'react-native';
//
//export default class HelloWorldApp extends Component {
//  render() {
//    return (
//      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//        <Text>Hello, world!</Text>
//        <Bananas />
//        <CouchBums />
//      </View>
//    );
//  }
//}
//
//class Bananas extends Component {
//  render() {
//    let pic = {
//      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
//    };
//    return (
//      <Image source={pic} style={{width: 193, height: 110}}/>
//    );
//  }
//}
//
//
//class CouchBums extends Component {
//  render() {
//    return (
//    <Text>
//        "Welcome to CouchBums!"
//    </Text>
//    );
//  }
//}
//
//AppRegistry.registerComponent('CouchbumsMobileUi', () => Bananas, CouchBums);

import React, { Component } from 'react';
import { Alert, Button, TextInput, View, StyleSheet, Text, FlatList, ActivityIndicator } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      isLoading: true,
    };
  }

  componentDidMount(){
  return fetch('http://facebook.github.io/react-native/movies.json')
        .then((response) => response.json())
        .then((responseJson) => {

          this.setState({
            isLoading: false,
            dataSource: responseJson.movies,
          }, function(){

          });

        })
        .catch((error) =>{
          console.error(error);
        });
}

  onLogin() {
    const { username, password } = this.state;
    Alert.alert('Credentials', `${username} + ${password}`);
    Alert.alert('votha');
    //Alert.alert(getMoviesFromApi());
  }

  render() {

      if(this.state.isLoading){
        return(
          <View style={{flex: 1, padding: 20}}>
            <ActivityIndicator/>
          </View>
        )
      }

    return (
//    <View style={{flex: 1, paddingTop:20}}>
//            <FlatList
//              data={this.state.dataSource}
//              renderItem={({item}) => <Text>{item.title}, {item.releaseYear}</Text>}
//              keyExtractor={({id}, index) => id}
//            />
//          </View>

      <View style={styles.container}>
        <Text>Welcome To CouchBums!</Text>
        <Text>The world's best app'</Text>
        <TextInput
          value={this.state.username}
          onChangeText={(username) => this.setState({ username })}
          placeholder={'Username'}
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
        />

        <Button
          title={'Login'}
          style={styles.input}
          onPress={this.onLogin.bind(this)}
        />
        <FlatList
            data={this.state.dataSource}
            renderItem={({item}) => <Text>{item.title}, {item.releaseYear}</Text>}
            keyExtractor={({id}, index) => id}
            //style={styles.list}
         />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
  list: {
  flex: 1,
  paddingTop: 20,
  }
});

