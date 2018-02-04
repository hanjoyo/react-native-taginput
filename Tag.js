import PropTypes from 'prop-types';
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  ViewPropTypes,
} from 'react-native';

const Tag = ({
  text,
  tagContainer,
  onPress,
}) => {
  const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      backgroundColor: 'gray',    
      paddingHorizontal: 5,
      margin: 2,
      borderRadius: 3,
      height:20,
    },
    text: {
      fontSize: 14,
      color: '#ffffff'
    },
  })

  return (
    <TouchableHighlight style={[styles.container, tagContainer]} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableHighlight>
  );
}

Tag.propTypes = {
  text: PropTypes.string,
  tagContainer: ViewPropTypes.style,
  onPress: PropTypes.func,
}

Tag.defaultProps = {
  text: 'none',
  tagContainer: null,
  onPress: () => {},
}

export default Tag;
