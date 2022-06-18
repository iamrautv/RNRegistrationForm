import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import moment from 'moment';
import { DatePickerModal } from 'react-native-paper-dates';
import Icon from 'react-native-vector-icons/FontAwesome';
import AwesomeAlert from 'react-native-awesome-alerts';
import {
  images,
  constants,
  validator,
  formHandlers,
  theme
 } from '../../config';
import { TextInput } from 'react-native-paper';
import styles from './styles';

const { colors } = theme;

const Register = (props) => {
  const { navigation } = props;

  const [isBirthdayPicker, setIsBirthdayPicker] = useState(false);
  const [alertConfig, setAlertConfig] = useState({
    isOpen: false,
    title: '',
    message: '',
    showProgress: false,
    isConfirm: true
  });
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

  const saveForm = () => {
    const validation = validator.registerValidator(formData);
    if (!validation.isValid) {
      setAlertConfig({
        ...alertConfig,
        isOpen: true,
        title: 'Error',
        message: validation.errors.join('\n'),
        isConfirm: true,
        showProgress: false
      });
      return;
    }
    formHandlers.registerFormHandler().save(formData, setAlertConfig, alertConfig);

  };

  return (
    <View style={styles.container}>
      <View style={styles.headerWrap}>
        <TouchableOpacity onPress={() => { navigation.goBack(); }}>
          <Icon name="arrow-left" size={24} color={colors.text} />
        </TouchableOpacity>
        <Text style={styles.header}>Registration</Text>
        <TouchableOpacity onPress={() => { navigation.goBack(); }}>
          <Icon name="home" size={26} color={colors.text} />
        </TouchableOpacity>
      </View>
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
              value={formData.birthday ? moment(formData.birthday).format('DD-MM-YYYY') : ''}
              onChangeText={text => { setIsBirthdayPicker(true); }}
              onPress={() => setIsBirthdayPicker(true)}
              mode="outlined"
              style={styles.input}
              disabled
              right={<TextInput.Icon name="calendar" onPress={() => { setIsBirthdayPicker(true); }} />}
            />
            <DatePickerModal
              locale="en"
              mode="single"
              visible={isBirthdayPicker}
              onDismiss={() => { setIsBirthdayPicker(false); }}
              date={formData.birthday}
              onConfirm={(e) => {
                setIsBirthdayPicker(false);
                setFormValue('birthday', e.date);
              }}
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
          onPress={() => { saveForm(); }}
          style={styles.continueBtn}
        >
          <Text style={styles.continueBtnTxt}>Join Our School</Text>
        </TouchableOpacity>
        <AwesomeAlert
          show={alertConfig.isOpen}
          showProgress={alertConfig.showProgress}
          title={alertConfig.title}
          message={alertConfig.message}
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={false}
          showConfirmButton={alertConfig.isConfirm}
          cancelText="No, cancel"
          confirmText="Ok"
          confirmButtonColor="#DD6B55"
          onCancelPressed={() => {}}
          onConfirmPressed={() => {
            setAlertConfig({
              ...alertConfig,
              isOpen: false,
            });
          }}
        />
      </ScrollView>
    </View>
  )
}

export default Register;
