import { StyleSheet } from 'react-native';
import { theme } from '../../config';

const { colors } = theme;

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: colors.white,
    alignItems: 'center'
  },
  loginLogoWrap: {
    width: '100%',
    height: 500,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginLogoImg: {
    width: 250,
  },
  loginBtn: {
    backgroundColor: colors.primary,
    paddingVertical: 15,
    paddingHorizontal: 35,
    borderRadius: 15
  },
  loginBtnTxt: {
    color: colors.white,
    fontWeight: '700',
    fontSize: 19
  },
  loginLinkWrap: {
    flexDirection: 'row',
    marginTop: 15
  },
  loginLinkPlainTxt: {
    fontSize: 16,
    marginRight: 5
  },
  loginLinkTxt: {
    color: colors.link,
    fontSize: 16
  }
});

export default styles;
