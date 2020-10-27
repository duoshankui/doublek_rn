/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {TextInput} from 'react-native'

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step One Two Three</Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.js</Text> to change this
                screen and then come back to see your edits.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

import { Image } from 'react-native'
const TestApp = () => {
  return (
    <ScrollView>
      <Text> Some Text </Text>
      <View>
        <Text>Some more Text </Text>
        <Image 
          source={{url: 'https://reactnative.dev/docs/assets/p_cat2.png'}}
          style={{width:200, height:200}}
         />
      </View>
      <TextInput 
        style={{
          height: 40,
          borderColor: 'red',
          borderWidth: 1
        }}
        defaultValue="You can type in me"
      />
    </ScrollView>
    );
}

function Cat() {
  // const name = "Maru"
  // function getFullName(firstName, secondName, thirdName) {
  //   return firstName +" "+ secondName + " " + thirdName;
  // }
  // return <Text>Hello, I am {name}! </Text>;
  // return <Text> Hello, I am {getFullName("Rom", "Tum", "Tugger")} </Text>
  return (
    <View>
      <Text>Hello, My name is DoubleK ....</Text>
      <TextInput
      style={{
        height:40,
        borderColor:'gray',
        borderWidth:1
      }}
      defaultValue="Name me!"
      />
    </View>
  );
}

import { useState } from 'react';
import { Button, } from 'react-native'

function Catty(props) {
  const [isHungry, setIsHungry] = useState(true);
  return (
    <View>
      <Text>I am { props.name }, and I am { isHungry ? "hungry" : "full" }!</Text>
      <Button 
        onPress={() => {
          setIsHungry(false);
        }}
        disabled={!isHungry}
        title={isHungry ? "Pour me some milk, please!" : "Thank you!"}
      />
    </View>
  );
}

function Cafe () {
  return (
    <SafeAreaView>
    <ScrollView>
    <View>
      <Catty name="Maru"/>
      <Catty name="Jellylorum"/>
      <Catty name="Spot"/>
    </View>
    </ScrollView>
    </SafeAreaView>
  );
}


//export default App;
// export default Cat;
// export default TestApp;
export default Cafe;
