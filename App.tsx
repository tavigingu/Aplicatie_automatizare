//import React from 'react';
import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  ImageBackground,
  Button,
  View,
  //Text,
} from 'react-native';

const backgroundImage = require('./assets/romaniafans.jpg');

function App(): React.JSX.Element {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      {isLoggedIn ? (
        <View style={styles.bodyContainer}>
          <View style={styles.buttonContainer}>
            <Button title="Go Out" onPress={handleLogout} />
          </View>
        </View>
      ) : (
        <ImageBackground source={backgroundImage} style={styles.background}>
          <Button
            title="Vezi scorurile"
            onPress={handleLogin}
            color="#3740FE"
          />
        </ImageBackground>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(100, 0, 0, 0.5)',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // semi-transparent black overlay over image
  },
  buttonContainer: {
    //justifyContent: 'center',
    //alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    left: 20,
  },
  welcomeText: {
    fontSize: 11,
    marginBottom: 20,
  },
  bodyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
