import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { images, constants } from '../../config';
import { TextInput } from 'react-native-paper';
import styles from './styles';

const Register = (props) => {
  const { navigation } = props;

  const [formData, setFormData] = useState({
    username: '',
    fullName: '',
    email: '',
    birthday: '',
    occupation: '',
  });

  const setFormValue = (prop, val) => {
    setFormData({
      ...formData,
      [prop]: val
    });
  };

  return (
    <ScrollView style={styles.wrap} contentContainerStyle={styles.wrapInner}>
      <Text style={styles.pageTitle}>Tell us little about yourself...</Text>
      <View style={styles.formWrap}>
        <View style={styles.inputRow}>
          <Text style={styles.inputLabel}>User Name*</Text>
          <TextInput
            label="User name"
            value={formData.username}
            onChangeText={text => { setFormValue('username', text); }}
            mode="outlined"
            style={styles.input}
          />
        </View>
        <View style={styles.inputRow}>
          <Text style={styles.inputLabel}>Full Name*</Text>
          <TextInput
            label="Full Name"
            value={formData.fullName}
            onChangeText={text => { setFormValue('fullName', text); }}
            mode="outlined"
            style={styles.input}
          />
        </View>
        <View style={styles.inputRow}>
          <Text style={styles.inputLabel}>Email Address*</Text>
          <TextInput
            label="Email Address"
            value={formData.email}
            onChangeText={text => { setFormValue('email', text); }}
            mode="outlined"
            style={styles.input}
          />
        </View>
        <View style={styles.inputRow}>
          <Text style={styles.inputLabel}>Birthday*</Text>
          <TextInput
            label="Birthday"
            value={formData.birthday}
            onChangeText={text => { setFormValue('birthday', text); }}
            mode="outlined"
            style={styles.input}
          />
        </View>
        <View style={styles.inputRow}>
          <Text style={styles.inputLabel}>Occupation*</Text>
          <TextInput
            label="Occupation"
            value={formData.occupation}
            onChangeText={text => { setFormValue('occupation', text); }}
            mode="outlined"
            style={styles.input}
          />
        </View>
      </View>
      <View style={styles.registerLogoWrap}>
        <Image
          source={images.registerLogo}
          resizeMode="contain"
          style={styles.registerLogoImg}
        />
      </View>
      <TouchableOpacity
        onPress={() => { navigation.navigate(routes.register) }}
        style={styles.continueBtn}
      >
        <Text style={styles.continueBtnTxt}>Join Our School</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

export default Register;
