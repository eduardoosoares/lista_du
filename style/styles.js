import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    backgroundColor: '#DC143C', 
  },
  input: {
    borderWidth: 1,
    borderColor: '#A9A9A9', 
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    backgroundColor: '#000', 
    color: '#DC143C',
  },
  listItem: {
    padding: 15,
    borderBottomWidth: 2,
    borderBottomColor: '#000', 
    backgroundColor: '	#fff', 
  },
  listItemText: {
    color: '#FFF', 
  },
  selectedItem: {
    backgroundColor: '#000', 
  },
  buttonsContainer: {
    marginTop: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#000', 
  },
  text: {
    color: '#fff', 
  },
  boatsaw: {
    backgroundColor: '#000',
    color: '#000'
  }
});

export default styles;
