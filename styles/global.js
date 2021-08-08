import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'yellow',
  },
  itemText: {
    marginVertical: 8,
    marginLeft: 10,
    fontSize: 11,
  },
  container: {
    flex: 1,
    padding: 20,
    flexDirection: 'column',
  },
  content: {
    padding: 40,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  list: {
    marginTop: 20,
    flex: 1,
  },
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 1,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  }
});