import React from 'react';
import { View, Text, StatusBar, Image, ScrollView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import LinearGradient from 'react-native-linear-gradient';

import InputComponent from '../../components/textFieldComponent';
import LightButtonComponent from '../../components/lightButtonComponent';

import useRegister from './hooks/useRegister';
import styles from './styles';

const Register = ({ navigation }: any) => {
  const { onButtonPress } = useRegister(navigation);
  return (
    <View>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={['#34CBCB', '#438CB3', '#005190']}>
        <StatusBar translucent={true} backgroundColor="transparent" />
        <Image
          style={styles.image}
          source={require('../../assets/img/background.png')}
        />
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.textTitle}>IdTrucker</Text>
            <FontAwesomeIcon icon={faUserCircle} color={'white'} size={100} />
            <Text style={styles.text}>Registrar</Text>
            <InputComponent label="Nome Completo" />
            <InputComponent
              label="RG"
              placeholder="00.000.000-0"
              keyboardType="numeric"
            />
            <InputComponent
              label="CPF"
              placeholder="000.000.000-00"
              keyboardType="numeric"
            />
            <InputComponent label="Email" />
            <InputComponent label="Senha" secureTextEntry={true} />
            <View style={styles.containerButton}>
              <LightButtonComponent
                title="Voltar"
                onPress={() => onButtonPress('Voltar')}
              />
              <LightButtonComponent
                title="Registrar"
                onPress={() => onButtonPress('HomeScreen')}
              />
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    </View>
  );
};

export default Register;