import React, { useState } from 'react';
import { Alert } from 'react-native';
import api from '../../../services/api';

import {
  Container,
  Camera as RNCamera,
  IconButton,
  Icon,
  Header,
  Footer,
  IconButtonTop,
  ContainerConfirm,
  SubmitButton,
  Text,
} from './styles';

const androidCameraPermissionOptions = {
  title: 'Permissão para usar a câmera',
  message: 'Gostaria da sua permissão para usar sua câmera',
  buttonPositive: 'Ok',
  buttonNegative: 'Cancelar',
};

const androidRecordAudioPermissionOptions = {
  title: 'Permissão para usar o microfone',
  message: 'Gostaria da sua permissão para usar seu microfone',
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

        console.log(response.data);

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
      }
    } catch (error) {
      Alert.alert(
        `${error.response.data.error || 'Falha na Captura da Assinatura'}`
      );
    }
  }

  async function takePicture(camera) {
    if (camera) {
      const options = { quality: 0.5, base64: true, pauseAfterCapture: true };
      const data = await camera.takePictureAsync(options);
      // alert(data.uri);

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
        androidCameraPermissionOptions={androidCameraPermissionOptions}
        androidRecordAudioPermissionOptions={
          androidRecordAudioPermissionOptions
        }
      >
        {({ camera, status }) => {
          return (
            <Container>
              <Header>
                {/* <IconButtonTop onPress={() => setFlashMode((value) => !value)}>
                <Icon
                  name={flashMode ? 'flash-on' : 'flash-off'}
                  size={30}
                  color="#fff"
                />
              </IconButtonTop> */}
                {/* <IconButtonTop onPress={() => closeCamera()}>
                <Icon name="close" size={30} color="#fff" />
              </IconButtonTop> */}
              </Header>
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
      <SubmitButton onPress={handleSubmit}>
        <Text>Enviar</Text>
      </SubmitButton>
    </ContainerConfirm>
  );
}
