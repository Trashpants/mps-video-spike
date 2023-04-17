import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#111",
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 48,
    paddingVertical: 12,
  },
  control: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    height: 24,
    marginBottom: 3,
    justifyContent: 'center'
  },
  iconValue: {
    fontSize: 12,
    fontWeight: '700',
    color: "#FFF"
  }
});
