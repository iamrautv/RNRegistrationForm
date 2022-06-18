import { StyleSheet } from 'react-native';
import { theme } from '../../config';

const { colors } = theme;

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: colors.secondary,
    width: '100%',
    paddingHorizontal: 15,
    paddingVertical: 8
  },
});

export default styles;
