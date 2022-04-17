import { Text, View, TouchableOpacity,TextInput, StyleSheet } from 'react-native';
import { HOME } from '../../constants/routes'
import { Card } from "../../components"

const GameScreen = ({navigation}) => { 

  
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => { navigation.navigate(HOME)}}>
          <Card text="Go Back"/>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default GameScreen;