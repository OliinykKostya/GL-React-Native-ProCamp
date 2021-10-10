import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {width: '100%'},
  borderWithError: {position: 'absolute', right: 0, top: -20},
  errorColor: {color: '#ff6347'},
  borderError: (error: any) => {
    return {
      borderColor: error ? '#ff6347' : '#F2F3F7',
      borderWidth: 1,
      borderRadius: 15,
    };
  },
  textInput: {
    height: 63,
    borderWidth: 1,
    padding: 10,
    borderColor: '#F2F3F7',
    backgroundColor: '#F2F3F7',
    borderRadius: 15,
  },
});
