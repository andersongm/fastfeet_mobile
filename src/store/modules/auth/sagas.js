import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { id } = payload;
    console.log('id:', id);
    const { data } = yield call(api.post, '/deliverymans/sessions', {
      id,
    });

    yield put(signInSuccess(data));
  } catch (error) {
    console.log(error);

    Alert.alert(
      'Falha na autenticação',
      'Erro ao efetuar Login, verifique seu ID de Acesso'
    );
    yield put(signFailure());
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
