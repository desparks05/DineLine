// Import necessary React and React Native components
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, Modal, Pressable } from 'react-native';

// Import Firebase authentication methods
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, fetchSignInMethodsForEmail } from 'firebase/auth';
import { auth } from '../../firebaseConfig';

// Custom components
import ImageViewer from '@/components/ImageViewer';
import Button from '@/components/Button';
import { useRouter } from 'expo-router';

// Placeholder image used in the login screen
const PlaceholderImage = require('@/assets/images/DineLineImage.png');

export default function LoginScreen() {
  // Initialize navigation hook
  const router = useRouter();

  // State for login form
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // State for register modal
  const [registerVisible, setRegisterVisible] = useState(false);
  const [regEmail, setRegEmail] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [regConfirmPassword, setRegConfirmPassword] = useState('');
  const [regError, setRegError] = useState('');

  // State for forgot password modal
  const [resetModalVisible, setResetModalVisible] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [resetError, setResetError] = useState('');

  // Handles new user registration
  const handleSignUp = async () => {
    setRegError('');

    // Validate fields are filled
    if (!regEmail || !regPassword || !regConfirmPassword) {
      setRegError('Please fill in all fields.');
      return;
    }

    // Check if passwords match
    if (regPassword !== regConfirmPassword) {
      setRegError('Passwords do not match.');
      return;
    }

    try {
      // Check if email is already registered
      const methods = await fetchSignInMethodsForEmail(auth, regEmail);
      if (methods.length > 0) {
        setRegError('Email is already in use. Please try again.');
        return;
      }

      // Create user in Firebase
      await createUserWithEmailAndPassword(auth, regEmail, regPassword);
      Alert.alert('Success', 'User registered successfully!');

      // Close modal and reset form
      setRegisterVisible(false);
      setRegEmail('');
      setRegPassword('');
      setRegConfirmPassword('');
    } catch (error: any) {
      setRegError(error.message); // Show registration error
    }
  };

  // Handles user login
  const handleSignIn = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password.');
      return;
    }
    try {
      // Firebase login
      await signInWithEmailAndPassword(auth, email, password);
      router.replace('/(tabs)'); // Navigate to home screen (tabs layout)
    } catch (error: any) {
      Alert.alert('Sign-In Error', 'Incorrect email or password.');
    }
  };

  // Handles password reset via email
  const handleResetPassword = async () => {
    setResetError('');
    if (!resetEmail) {
      setResetError('Please enter your email.');
      return;
    }
    try {
      await sendPasswordResetEmail(auth, resetEmail);
      Alert.alert('Success', 'Password reset email sent.');

      // Close modal and reset field
      setResetModalVisible(false);
      setResetEmail('');
    } catch (error: any) {
      setResetError(error.message);
    }
  };

  return (
    <View style={styles.container}>
      {/* Logo or image preview */}
      <ImageViewer imgSource={PlaceholderImage} />

      {/* Page title */}
      <Text style={styles.headerText}>Login to DineLine!</Text>

      {/* Login form */}
      <View>
        <Text style={styles.normalText}>Enter Email</Text>
        <TextInput
          style={styles.form}
          placeholder='Enter Email'
          value={email}
          onChangeText={setEmail}
          keyboardType='email-address'
          autoCapitalize='none'
        />
        <Text style={styles.normalText}>Enter Password</Text>
        <TextInput
          style={styles.form}
          placeholder='Enter Password'
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>

      {/* Auth buttons */}
      <View>
        <Button theme='primary' label='Login' onPress={handleSignIn} />
        <Button theme='primary' label='Register' onPress={() => setRegisterVisible(true)} />
        <Button theme='primary' label='Forgot Password?' onPress={() => setResetModalVisible(true)} />
      </View>

      {/* Register Modal */}
      <Modal visible={registerVisible} animationType='slide' transparent>
        <View style={styles.modalViewWrapper}>
          <View style={styles.modalView}>
            <Text style={styles.headerText}>Register</Text>
            {/* Display registration error */}
            {regError ? <Text style={styles.errorText}>{regError}</Text> : null}

            {/* Register form fields */}
            <TextInput
              style={styles.form}
              placeholder='Enter Email'
              value={regEmail}
              onChangeText={setRegEmail}
              keyboardType='email-address'
              autoCapitalize='none'
            />
            <TextInput
              style={styles.form}
              placeholder='Enter Password'
              value={regPassword}
              onChangeText={setRegPassword}
              secureTextEntry
            />
            <TextInput
              style={styles.form}
              placeholder='Confirm Password'
              value={regConfirmPassword}
              onChangeText={setRegConfirmPassword}
              secureTextEntry
            />
            <Button label='Submit' theme='primary' onPress={handleSignUp} />
            <Pressable onPress={() => setRegisterVisible(false)}>
              <Text style={styles.normalText}>Cancel</Text>
            </Pressable>
            {/* Close button */}
            <Pressable onPress={() => setRegisterVisible(false)} style={{ position: 'absolute', top: 10, right: 10 }}>
              <Text style={{ fontSize: 20, color: '#0033a0' }}>✕</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      {/* Password Reset Modal */}
      <Modal visible={resetModalVisible} animationType='slide' transparent>
        <View style={styles.modalViewWrapper}>
          <View style={styles.modalView}>
            <Text style={styles.headerText}>Reset Password</Text>
            {/* Display reset error */}
            {resetError ? <Text style={styles.errorText}>{resetError}</Text> : null}

            {/* Reset password input */}
            <TextInput
              style={styles.form}
              placeholder='Enter your email'
              value={resetEmail}
              onChangeText={setResetEmail}
              keyboardType='email-address'
              autoCapitalize='none'
            />
            <Button label='Send Reset Email' onPress={handleResetPassword} />
            <Pressable onPress={() => setResetModalVisible(false)}>
              <Text style={styles.normalText}>Cancel</Text>
            </Pressable>
            {/* Close button */}
            <Pressable onPress={() => setResetModalVisible(false)} style={{ position: 'absolute', top: 10, right: 10 }}>
              <Text style={{ fontSize: 20, color: '#0033a0' }}>✕</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

// Style definitions for layout and appearance
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0033a0',
    padding: 24,
    alignItems: 'center',
  },
  headerText: {
    marginTop: -10,
    paddingVertical: 8,
    borderWidth: 2,
    borderColor: '#20232a',
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
    color: '#0033a0',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  form: {
    alignSelf: 'flex-start',
    width: 300,
    marginTop: 20,
    paddingVertical: 1,
    borderWidth: 2,
    borderColor: '#20232a',
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
    color: 'black',
    textAlign: 'left',
    fontSize: 20,
    paddingLeft: 10,
  },
  normalText: {
    alignSelf: 'flex-start',
    marginTop: 20,
    paddingVertical: 1,
    color: 'white',
    textAlign: 'left',
    fontSize: 25,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    marginTop: 10,
    marginBottom: -10,
    textAlign: 'center',
  },
  modalViewWrapper: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    position: 'relative'
  },
});