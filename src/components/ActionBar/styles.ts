import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: "#111",
    justifyContent: 'space-between',
    paddingHorizontal: 32,
    paddingVertical: 12,

  },
  control: {
    alignItems: 'center',
    width: 72,
  },
  circle: {
    height: 48,
    width: 48,
    borderRadius: 48 / 2,
    backgroundColor: "#C50",
    justifyContent: "center",
    alignItems: 'center',
    marginBottom: 6
  },
  value: {
    color: "#FFF",
    fontWeight: '900'
  },
  label: {
    color: "#999",
    fontSize: 10,
    textAlign: 'center'
  },
});
