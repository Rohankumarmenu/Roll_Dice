import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';
import FirstDice from '../assets/One.png'
import SecDice from '../assets/Two.png'
import ThirdDice from '../assets/Three.png'
import FourthDice from '../assets/Four.png'
import FifthDice from '../assets/Five.png'
import SixthDice from '../assets/Six.png'

import {
  Image,
  ImageSourcePropType,
  Pressable,

  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType
}>;

// function Section({children, title}: SectionProps): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

const Dice = ({ imageUrl }: DiceProps): JSX.Element => {
  return (
    <View>
      <Image style={styles.diceImage} source={imageUrl}>
      </Image>
    </View>
  )
}

function App(): React.JSX.Element {
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(FirstDice)
  const tap = () => {
    let k = Math.floor(Math.random() * 6) + 1;

    switch (k) {
      
      case 1:
        setDiceImage(FirstDice)
        break;
      case 2:
        setDiceImage(SecDice)
        break;

      case 3:
        setDiceImage(ThirdDice)
        break;

      case 4:
        setDiceImage(FourthDice)
        break;

      case 5:
        setDiceImage(FifthDice)
        break;

      case 6:
        setDiceImage(SixthDice)
        break;
    default:
      setDiceImage(FirstDice)
      break;
  }
};
return (
  <>
    <View style={styles.container}>
      {/* <Text>Test</Text>
        */}
      <Dice imageUrl={diceImage}></Dice>
      <Pressable onPress={tap}><Text style={styles.rollDiceBtnText}>Roll it</Text></Pressable>
    </View>
  </>

);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});

export default App;
