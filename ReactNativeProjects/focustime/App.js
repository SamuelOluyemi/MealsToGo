import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
} from 'react-native';
import { colors } from './src/utils/colors';
import { Focus } from './src/features/Focus';
import { Timer } from './src/features/Timer';
import { FocusHistory} from './src/features/FocusHistory';

export default function App() {
  const [currentSubject, setCurrentSubject] = useState();
  const [history, setHistory] = useState([]);
  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? (
        <>
        <Focus addSubject={setCurrentSubject} />
        <FocusHistory history={history} />
        </>
      ): (
        <View style={styles.container}>
          <Timer
            focusSubject={currentSubject}
            onTimerEnd={(subject) => {
              setHistory([ ...history, subject ])
            }}
            clearSubject={() => setCurrentSubject(null)}
          />
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'row', 
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.darkBlue,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

// export default function App() {
//   const [currentSubject, setCurrentSubject] = useState(null);
//   return (
//     <SafeAreaView style={styles.container}>
//      // if we don't have a currentSubject, show us Focus, otherwise, show us a text that says...
// {!currentSubject ? (
//            <Focus addSubject={setCurrentSubject} />
//            ) : (
//       <View> <Text style={{color: colors.white}}> We are going to render the timer for {currentSubject} </Text>
//       </View>
//       )}
//     </SafeAreaView>
//   );
// }

// <Text style= {[styles.title, {padding: 20, fontStyles: 'italic', }]}> We haven't focused on anything yet !
// Input a focus task in the box to start focusing...
// </Text>;

// {'\n'} next line or paragraph
