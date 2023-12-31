import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import HeaderComponent from '../../components/headerComponent';
import useHome from './hooks/useHome';
import styles from './styles';
import RegistrarComponent from '../../components/homeComponents/registrar';
import ModalComponent from '../../components/modalComponent';

// Importe os componentes modais correspondentes
import PercursoScreen from '../../components/estatisticas/percursoScreen';
import ViagensScreen from '../../components/estatisticas/viagensScreen';
import ClassificacaoScreen from '../../components/estatisticas/classificacaoScreen';
import AvaliacaoScreen from '../../components/estatisticas/avaliacaoScreen';

const Home = ({ navigation, route }: any) => {
  const {
    userLevel,
    isFinish,
    isCheck,
    isVisible,
    image,
    user,
    xpFinal,
    isTravel,
    showTripAlert,
  } = useHome(route);

  // navigation.reset({
  //   index: 0,
  //   routes: [{ name: 'Home' }],
  // });

  // Estados e funções para controlar a visibilidade dos modais
  const [percursoModalVisible, setPercursoModalVisible] = useState(false);
  const [viagensModalVisible, setViagensModalVisible] = useState(false);
  const [classificacaoModalVisible, setClassificacaoModalVisible] =
    useState(false);
  const [avaliacaoModalVisible, setAvaliacaoModalVisible] = useState(false);

  // Funções para abrir e fechar os modais
  const openPercursoModal = () => {
    setPercursoModalVisible(true);
  };

  const closePercursoModal = () => {
    setPercursoModalVisible(false);
  };

  const openViagensModal = () => {
    setViagensModalVisible(true);
  };

  const closeViagensModal = () => {
    setViagensModalVisible(false);
  };

  const openClassificacaoModal = () => {
    setClassificacaoModalVisible(true);
  };

  const closeClassificacaoModal = () => {
    setClassificacaoModalVisible(false);
  };

  const openAvaliacaoModal = () => {
    setAvaliacaoModalVisible(true);
  };

  const closeAvaliacaoModal = () => {
    setAvaliacaoModalVisible(false);
  };

  // Dados dos botões (cores, nomes e ícones)
  const buttons = [
    {
      color: '#533BBF',
      name: 'Percurso',
      icon: require('../../components/icons/maneira.png'),
      onPress: openPercursoModal,
    },
    {
      color: '#1F73B3',
      name: 'Viagens',
      icon: require('../../components/icons/corrida.png'),
      onPress: openViagensModal,
    },
    {
      color: '#2FB5B5',
      name: 'Classificação',
      icon: require('../../components/icons/avaliacao.png'),
      onPress: openClassificacaoModal,
    },
    {
      color: '#033C91',
      name: 'Avaliação',
      icon: require('../../components/icons/apresentacao.png'),
      onPress: openAvaliacaoModal,
    },
  ];

  return (
    <View>
      {/* {user.nome == "Gustavo Kiyoto" ? <HeaderComponent title='Empresa XPTO' />} */}
      <HeaderComponent
        title={user.nome}
        isUser={true}
        xp={user.xp}
        level={userLevel}
        progressValue={xpFinal}
      />
      <Text style={styles.titulo}>Estatísticas</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.buttonContainer}>
        {buttons.map((button, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.button, { backgroundColor: button.color }]}
            onPress={button.onPress} // Chama a função onPress correspondente ao botão
          >
            <Image source={button.icon} style={styles.icon} />
            <Text style={styles.buttonText}>{button.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <Text style={styles.titulo}>Entrega em andamento...</Text>
      <RegistrarComponent
        isTravel={isTravel}
        isCheck={isCheck}
        isFinish={isFinish}
      />
      {/* Renderize os modais quando as variáveis de visibilidade correspondentes forem true */}
      <PercursoScreen
        isVisible={percursoModalVisible}
        onClose={closePercursoModal}
      />
      <ViagensScreen
        isVisible={viagensModalVisible}
        onClose={closeViagensModal}
      />
      <ClassificacaoScreen
        isVisible={classificacaoModalVisible}
        onClose={closeClassificacaoModal}
      />
      <AvaliacaoScreen
        isVisible={avaliacaoModalVisible}
        onClose={closeAvaliacaoModal}
      />
      <ModalComponent
        isVisible={isVisible}
        onClose={() => showTripAlert(false, 'close')}
      />
    </View>
  );
};

export default Home;
