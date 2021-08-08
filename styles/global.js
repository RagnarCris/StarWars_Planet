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
    fontFamily: 'starjedi',
    fontSize: 10,
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
    padding: 20,
    flex: 1,
    flexDirection: 'column',
    borderColor: 'yellow',
    borderWidth: 2,
    borderStyle: "solid",
    borderRadius: 10,
    marginTop: 10
  },
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: 'black',
    borderWidth: 2,
    borderStyle: "dashed",
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    fontFamily: 'starjedi',
    fontSize: 10,
  },
  itemHide: {
    padding: 16,
    marginTop: 16,
    borderColor: 'black',
    borderWidth: 2,
    borderStyle: "dashed",
    borderRadius: 1,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    fontFamily: 'starjedi',
    fontSize: 10,
    height: 48
  },
  icon: {
    marginLeft: 180
  }
});