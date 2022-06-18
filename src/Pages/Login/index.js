import React from 'react';
import {
  View,
  Text,
  Image,
  Button,
  TouchableOpacity
} from 'react-native';
import { images, constants } from '../../config';
import styles from './styles';

const { routes } = constants;

const Login = (props) => {
  const { navigation } = props;

  return (
    <View style={styles.wrap}>
      <View style={styles.loginLogoWrap}>
        <Image
          source={images.loginLogo}
          resizeMode="contain"
          style={styles.loginLogoImg}
        />
      </View>
      <TouchableOpacity
        onPress={() => { navigation.navigate(routes.register) }}
        style={styles.loginBtn}
      >
        <Text style={styles.loginBtnTxt}>Join Our School</Text>
      </TouchableOpacity>
      <View style={styles.loginLinkWrap}>
        <Text style={styles.loginLinkPlainTxt}>Existing User?</Text>
        <TouchableOpacity
          onPress={() => { navigation.navigate(routes.register) }}
        >
          <Text style={styles.loginLinkTxt}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Login;
