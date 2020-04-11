import React, { useState, useEffect, useContext, useCallback } from 'react';
import {
  Text,
  View,
  StatusBar,
  StyleSheet,
  Dimensions,
  TouchableHighlight,
} from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Context } from '../../../store/Provider';
import {
  handleBarCodeScanned,
  requestCameraPermission,
} from '../../utils/functions';
import { useFocusEffect } from '@react-navigation/native';
import { secondaryBackgroundColor } from '../../utils/colors';
export default function Scanner({ navigation }) {
  const { width, height } = Dimensions.get('window');
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: secondaryBackgroundColor,
      justifyContent: 'center',
      alignItems: 'center',
    },
    window: {
      height,
      width,
      flex: 1,
    },
  });
  const [hasCameraPermission, setHasCameraPermission] = useState(false);
  const { scannedText, setScannedText } = useContext(Context);
  const [timeOutValue, setTimeoutValue] = useState();

  useEffect(() => {
    requestCameraPermission(setHasCameraPermission);
  }, []);
  useFocusEffect(
    useCallback(() => {
      if (!timeOutValue) {
        const timeOut = setTimeout(() => {
          setScannedText(false);
        }, 2000);
        setTimeoutValue(timeOut);
      }
    }, [])
  );
  return (
    <View style={styles.container}>
      {hasCameraPermission ? (
        <BarCodeScanner
          onBarCodeScanned={({ data }) => {
            if (!scannedText) {
              handleBarCodeScanned(setScannedText, data, navigation);
            }
          }}
          style={styles.window}
        />
      ) : (
        <TouchableHighlight
          onPress={() => requestCameraPermission(setHasCameraPermission)}
        >
          <Text style={{ color: '#fff' }}>
            Não há permissão, clique novamente aqui
          </Text>
        </TouchableHighlight>
      )}
      <StatusBar hidden />
    </View>
  );
}
