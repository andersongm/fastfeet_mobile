import React from 'react';
// import { RNCamera } from 'react-native-camera';

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
  message: 'Nós precisamos de sua permissão para usar sua câmera',
  buttonPositive: 'Ok',
  buttonNegative: 'Cancelar',
};

const androidRecordAudioPermissionOptions = {
  title: 'Permissão para usar o microfone',
  message: 'Nós precisamos de sua permissão para usar seu microfone',
  buttonPositive: 'Ok',
  buttonNegative: 'Cancelar',
};

export default function ConfirmDelivery({ navigation }) {
  function handleSubmit() {}

  async function takePicture(camera) {
    if (camera) {
      const options = { quality: 0.5, base64: true };
      const data = await camera.takePictureAsync(options);
      alert(data.uri);
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
