import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { theme } from '../../config';
import styles from './styles';

const { colors } = theme;

const DrawerHeader = ({ navigation }) => {
  console.log({ navigation });
  return (
    <View style={styles.wrap}>
      <TouchableOpacity onPress={() => { navigation.toggleDrawer(); }}>
        <Icon name="bars" size={24} color={colors.white} />
      </TouchableOpacity>
    </View>
  );
};

export default DrawerHeader;
