import { Alert, Linking, ToastAndroid, Clipboard } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

export const handleBarCodeScanned = (setScannedText, data, navigation) => {
  setScannedText(data);
  navigation.push('ScannedTextView');
};

export const handlePressUrl = async (scannedText) => {
  const canOpenURL = await Linking.canOpenURL(scannedText);
  if (canOpenURL) {
    Linking.openURL(scannedText);
  }
};

export const requestCameraPermission = async (setHasCameraPermission) => {
  const { status } = await BarCodeScanner.requestPermissionsAsync();
  setHasCameraPermission(status === 'granted');
};

export const copyToClipboard = (scannedText) => {
  ToastAndroid.show('Copiado', ToastAndroid.SHORT);
  Clipboard.setString(scannedText);
};
