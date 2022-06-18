import { StyleSheet } from 'react-native';
import { theme } from '../../config';

const { colors } = theme;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  headerWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
  header: {
    color: colors.text,
    fontWeight: '700',
    fontSize: 25,
  },
  wrap: {
    flex: 1,
    backgroundColor: colors.white,
  },
  wrapInner: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: colors.white,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  pageTitle: {
    color: colors.text,
    fontWeight: '700',
    fontSize: 17,
    marginBottom: 10
  },
  registerLogoWrap: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerLogoImg: {
    width: 200,
  },
  formWrap: {
    flex: 1,
    width: '100%'
  },
  inputRow: {
    width: '100%',
    marginVertical: 10
  },
  inputLabel: {
    width: '100%',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 14,
    marginBottom: 5
  },
  input: {
    height: 40
  },
  continueBtn: {
    backgroundColor: colors.secondary,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 15,
    alignSelf: 'center'
  },
  continueBtnTxt: {
    color: colors.white,
    fontWeight: '700',
    fontSize: 17
  },
});

export default styles;
