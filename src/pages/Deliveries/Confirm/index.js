import React, { useState } from 'react';
import { Alert } from 'react-native';
import PropTypes from 'prop-types';
import api from '../../../services/api';

import {
  Container,
  Camera as RNCamera,
  IconButton,
  Icon,
  Footer,
  ContainerConfirm,
  SubmitButton,
  Text,
} from './styles';

const androidCameraPermissionOptions = {
  title: 'Permissão para usar a câmera',
  message: 'FastFeet precisa de permissão para usar a câmera',
  buttonPositive: 'Ok',
  buttonNegative: 'Cancelar',
};

const androidRecordAudioPermissionOptions = {
  title: 'Permissão para usar o microfone',
  message: 'FastFeet precisa de permissão para usar seu microfone',
  buttonPositive: 'Ok',
  buttonNegative: 'Cancelar',
};

export default function ConfirmDelivery({ navigation, route }) {
  const idDelivery = route.params.id;

  const [signaturePhoto, setSignaturePhoto] = useState(null);

  async function handleSubmit() {
    try {
      if (signaturePhoto) {
        const data = new FormData();
        data.append('file', {
          type: 'image/jpg',
          uri: signaturePhoto,
          name: 'signature.jpg',
        });

        const response = await api.post('/signaturefiles', data);

        const { id } = response.data;

        const endResponse = await api.put(`deliveries/${idDelivery}/end`, {
          signature_id: id,
        });

        if (!endResponse) {
          Alert.alert(
            'Não foi possível confirmar a Entrega. Favor entre em contato com a Administração do FastFeet'
          );
          return;
        }

        Alert.alert(
          'Encomenda Entregue',
          'Encomenda Entregue e Assinatura Coletada',
          [
            {
              text: 'OK',
              onPress: () => navigation.goBack(),
            },
          ],
          { cancelable: false }
        );
      } else {
        Alert.alert(
          'Você deve Capturar a Assinatura do Destinatário Primeiro!'
        );
      }
    } catch (error) {
      Alert.alert(
        `${error.response.data.error || 'Falha na Captura da Assinatura'}`
      );
    }
  }

  async function takePicture(camera) {
    if (camera) {
      const options = {
        quality: 0.2,
        base64: true,
        width: 408,
        heigth: 200,
        forceUpOrientation: true,
        orientation: RNCamera.Constants.Orientation.portrait,
        pictureOrientation: 0,
        pauseAfterCapture: true,
      };
      const data = await camera.takePictureAsync(options);

      Alert.alert(
        'Confirmar Assinatura',
        'Deseja enviar essa Assinatura?',
        [
          {
            text: 'Não',
            onPress: () => camera.resumePreview(),
          },
          {
            text: 'Sim',
            onPress: () => setSignaturePhoto(data.uri),
          },
        ],
        { cancelable: false }
      );
    }
  }

  return (
    <ContainerConfirm>
      <RNCamera
        autoFocus={RNCamera.Constants.AutoFocus.on}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.off}
        pictureOrientation={RNCamera.Constants.Orientation.portrait}
        androidCameraPermissionOptions={androidCameraPermissionOptions}
        androidRecordAudioPermissionOptions={
          androidRecordAudioPermissionOptions
        }
      >
        {({ camera, status }) => {
          return (
            <Container>
              <Footer>
                <IconButton
                  onPress={() => takePicture(camera)}
                  disabled={status !== 'READY'}
                >
                  <Icon name="photo-camera" size={30} color="#fff" />
                </IconButton>
              </Footer>
            </Container>
          );
        }}
      </RNCamera>
      <SubmitButton disabled={!signaturePhoto} onPress={handleSubmit}>
        <Text>Enviar</Text>
      </SubmitButton>
    </ContainerConfirm>
  );
}

ConfirmDelivery.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
};
