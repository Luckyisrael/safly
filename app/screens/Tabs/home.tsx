import { MaterialCommunityIcons } from '@expo/vector-icons';
import IlluminatedCircleImage from 'app/components/IlluminatedCircle';
import NavigationButtons from 'app/components/NavigationButtons';
import { colors, fontSize } from 'app/constants/theme';
import { Button, Container, Text } from 'app/lib';
import { moderateScale } from 'app/lib/ResponsiveSize';
import * as BackgroundFetch from 'expo-background-fetch';
import * as Location from 'expo-location';
import { Gyroscope } from 'expo-sensors';
import * as TaskManager from 'expo-task-manager';
import { CallRemove, Danger, LocationTick } from 'iconsax-react-native';
import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Modal, ScrollView } from 'react-native';


const logo = require('../../../assets/icon.png');

const LOCATION_TASK_NAME = 'background-location-task';
const ROTATION_THRESHOLD = 5;
const COUNTDOWN_DURATION = 30;
const WHATSAPP_NUMBER = '+1234567890';

const SOSConfirmationScreen = ({ message, onClose }) => (
  <Container>
    <ScrollView contentContainerStyle={styles.confirmationContent}>
      <View>
        <Danger size="32" color="red" />
      </View>
      <Text color='white' style={styles.confirmationTitle}>SOS Message Sent</Text>
      <Text color='white' style={styles.confirmationMessage}>
        The following message was sent to emergency contacts:
      </Text>
      <View style={styles.messageBox}>
        <Text style={styles.messageText}>{message}</Text>
      </View>
      <Text color='white' style={styles.confirmationInfo}>
        Help is on the way. Stay calm and wait for assistance.
      </Text>
      <Button label="Close" onPress={onClose} />
    </ScrollView>
  </Container>
);

const Home = () => {
  const [isAccidentDetected, setIsAccidentDetected] = useState(false);
  const [isSOSSent, setIsSOSSent] = useState(false);
  const [sosMessage, setSOSMessage] = useState('');
  const [countdown, setCountdown] = useState(COUNTDOWN_DURATION);
  const [location, setLocation] = useState(null);
  const rotationCount = useRef(0);
  const countdownIntervalRef = useRef(null);

  useEffect(() => {
    (async () => {
      const { status: foregroundStatus } = await Location.requestForegroundPermissionsAsync();
      if (foregroundStatus !== 'granted') {
        console.log('Foreground location permission denied');
        return;
      }

      const { status: backgroundStatus } = await Location.requestBackgroundPermissionsAsync();
      if (backgroundStatus !== 'granted') {
        console.log('Background location permission denied');
        return;
      }

      await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
        accuracy: Location.Accuracy.Balanced,
        timeInterval: 5000,
        distanceInterval: 10,
      });

      await startAccidentDetection();
    })();

    return () => {
      Location.stopLocationUpdatesAsync(LOCATION_TASK_NAME);
      Gyroscope.removeAllListeners();
      if (countdownIntervalRef.current) {
        clearInterval(countdownIntervalRef.current);
      }
    };
  }, []);

  const startAccidentDetection = async () => {
    Gyroscope.setUpdateInterval(100);
    Gyroscope.addListener((gyroscopeData) => {
      const { x, y, z } = gyroscopeData;
      if (Math.abs(x) > 5 || Math.abs(y) > 5 || Math.abs(z) > 5) {
        rotationCount.current += 1;
        if (rotationCount.current >= ROTATION_THRESHOLD) {
          triggerAccidentDetection();
        }
      }
    });
  };

  const triggerAccidentDetection = () => {
    setIsAccidentDetected(true);
    setCountdown(COUNTDOWN_DURATION);
    startCountdown();
  };

  const startCountdown = () => {
    if (countdownIntervalRef.current) {
      clearInterval(countdownIntervalRef.current);
    }
    countdownIntervalRef.current = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown <= 1) {
          clearInterval(countdownIntervalRef.current);
          sendSOSMessage();
          return 0;
        }
        return prevCountdown - 1;
      });
    }, 1000);
  };

  const getAddressFromCoordinates = async (latitude, longitude) => {
    try {
      const result = await Location.reverseGeocodeAsync({ latitude, longitude });
      if (result.length > 0) {
        const { street, city, region, country, postalCode } = result[0];
        return `${street}, ${city}, ${region} ${postalCode}, ${country}`;
      }
    } catch (error) {
      console.error('Error getting address:', error);
    }
    return 'Address not found';
  };

  const sendWhatsAppMessage = async (phoneNumber, message) => {
    console.log(`Sending WhatsApp message to ${phoneNumber}: ${message}`);
    //todo: API call to send the WhatsApp message
  };

  const sendSOSMessage = async () => {
    const currentLocation = await Location.getCurrentPositionAsync({});
    setLocation(currentLocation);

    const { latitude, longitude } = currentLocation.coords;
    const address = await getAddressFromCoordinates(latitude, longitude);

    const message = `SOS! I may have been in an accident. My location is: ${address}. Coordinates: ${latitude}, ${longitude}`;

    await sendWhatsAppMessage(WHATSAPP_NUMBER, message);
    console.log('SOS message sent via WhatsApp');
    setSOSMessage(message);
    setIsAccidentDetected(false);
    setIsSOSSent(true);
  };

  const handleUserResponse = () => {
    setIsAccidentDetected(false);
    rotationCount.current = 0;
    if (countdownIntervalRef.current) {
      clearInterval(countdownIntervalRef.current);
    }
    setCountdown(COUNTDOWN_DURATION);
  };

  const handleCloseConfirmation = () => {
    setIsSOSSent(false);
    setSOSMessage('');
  };

  if (isSOSSent) {
    return <SOSConfirmationScreen message={sosMessage} onClose={handleCloseConfirmation} />;
  }

  return (
    <Container>
      <View style={styles.container}>
        <View>
          <IlluminatedCircleImage
            imageUrl={logo}
            size={100}
            borderWidth={3}
            illuminationColor="rgb(173, 216, 230)"
            illuminationWidth={20}
          />
        </View>
        <TouchableOpacity>
          <Text style={styles.button} family="bold" size={fontSize.medium}>
            Alert
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.navigationButtons}>
        <NavigationButtons
          icon={<MaterialCommunityIcons name="incognito" size={32} color="black" />}
          description="Anonymous Reporting"
          onPress={() => {}}
        />
        <NavigationButtons
          icon={<Danger size="32" color="black"/>}
          description="Report a Crime"
          onPress={() => {}}
        />
        <NavigationButtons
          icon={<CallRemove size="32" color="black"/>}
          description="Emergency Contacts"
          onPress={() => {}}
        />
        <NavigationButtons
          icon={<LocationTick size="32" color="black"/>}
          description="Gps Tracking"
          onPress={() => {}}
        />
      </View>

      {isAccidentDetected && (
        <View style={styles.modal}>
          <Modal visible animationType="slide" transparent>
            <View style={styles.modalContainer}>
              <Text style={styles.modalText}>Are you okay?</Text>
              <Text style={styles.countdownText}>{countdown}</Text>
              <Button label="I'm okay" onPress={handleUserResponse} />
            </View>
          </Modal>
        </View>
      )}
    </Container>
  );
};

export default Home;

TaskManager.defineTask(LOCATION_TASK_NAME, ({ data, error }) => {
  if (error) {
    console.error(error);
    return;
  }
  if (data) {
    const { locations } = data;
    console.log('Received new locations', locations);
  }
});
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    backgroundColor: colors.theme.secondary,
    padding: 18,
    borderRadius: 15,
    paddingHorizontal: 20
  },
  navigationButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    gap: 10,
    paddingHorizontal: 20,
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  modalContainer: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalText: {
    fontSize: 24,
    marginBottom: 20,
    color: 'white',
  },
  countdownText: {
    fontSize: 48,
    marginBottom: 20,
    color: 'white',
  },

  confirmationContent: {
    padding: 20,
    alignItems: 'center',
  },
  confirmationTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  confirmationMessage: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
  messageBox: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    width: '100%',
  },
  messageText: {
    fontSize: 14,
  },
  confirmationInfo: {
    fontSize: 16,
    marginTop: 20,
    marginBottom: 30,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
