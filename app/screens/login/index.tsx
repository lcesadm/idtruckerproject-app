import React from 'react';
import { View, Text, StatusBar, Image, ScrollView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import LinearGradient from 'react-native-linear-gradient';

import InputComponent from '../../components/textFieldComponent';
import LightButtonComponent from '../../components/lightButtonComponent';

import useLogin from './hooks/useLogin';
import styles from './styles';

const Login = ({ navigation }: any) => {
  const { onButtonPress } = useLogin(navigation);
  return (
    <View>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={['#34CBCB', '#438CB3', '#005190']}
        style={styles.background}>
        <StatusBar translucent={true} backgroundColor="transparent" />
        <Image
          style={styles.image}
          source={require('../../assets/img/background.png')}
        />
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.textTitle}>IdTrucker</Text>
            <FontAwesomeIcon icon={faUserCircle} color={'white'} size={100} />
            <Text style={styles.text}>Login</Text>
            <InputComponent label="Email" placeholder="janedoe@gmail.com" />
            <InputComponent
              label="Senha"
              secondaryLabel="Esqueci minha senha"
              placeholder="********"
              secureTextEntry={true}
            />
            <View style={styles.containerButton}>
              <LightButtonComponent
                title="Registrar"
                onPress={() => onButtonPress('RegisterScreen')}
              />
              <LightButtonComponent
                title="Login"
                onPress={() => onButtonPress('HomeScreen')}
              />
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    </View>
  );
};

export default Login;
