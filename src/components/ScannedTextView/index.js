import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Context } from '../../../store/Provider';
import { FontAwesome5 } from '@expo/vector-icons';
import { secondaryBackgroundColor, textColor } from '../../utils/colors';
import { copyToClipboard, handlePressUrl } from '../../utils/functions';

export default function ScannedTextView() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: secondaryBackgroundColor,
    },
    textContainer: {
      width: '80%',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'flex-end',
    },

    text: {
      color: textColor,
      fontSize: 20,
    },
    iconContainer: { alignItems: 'center' },
    secondaryText: {
      textAlign: 'center',
      alignSelf: 'flex-start',
      color: textColor,
      marginBottom: 10,
    },
  });
  const { scannedText } = useContext(Context);
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <TouchableOpacity onPress={() => handlePressUrl(scannedText)}>
          <Text style={styles.text}>{scannedText}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            copyToClipboard(scannedText);
          }}
        >
          <View style={styles.iconContainer}>
            <Text style={styles.secondaryText}>Copiar</Text>
            <FontAwesome5 name="clipboard" size={32} color="#EAE8F3" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
