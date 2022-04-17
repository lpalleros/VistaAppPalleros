import { View, TouchableOpacity } from 'react-native';

import { Nav, Card } from '../../components';
import { GAME } from '../../constants/routes';

const HomeScreen = ({navigation}) => { 

  return (
    <View >
      <Nav/>
      <TouchableOpacity 
        onPress={() => {navigation.navigate(GAME)}}
      >
      <Card text="Start Game"/>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen;