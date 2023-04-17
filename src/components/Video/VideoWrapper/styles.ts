import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 180
  },
  footerWrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  footer: {
    justifyContent: 'flex-end',
    height: 180
  },
  matchDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 24,
    marginBottom: 6,
  },
  spacer: {
    width: 3,
  },
  spacerLarge: {
    width: 6,
  },
  teamLogo: {
    height: 18,
    width: 18
  },
  matchString: {
    color: "#ababab",
    fontWeight: "600",
    fontSize: 14,
  },
  matchV: {
    color: "#ababab",
    fontWeight: "800",
    fontSize: 18,
  },
  playerName: {
    color: "#FFF",
    fontSize: 28,
    fontWeight: "700",
    marginHorizontal: 24,
    marginBottom: 24,
  }
});
