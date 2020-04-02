import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { id } = payload;
    const { data } = yield call(api.post, 'deliverymans/sessions', {
      id,
    });
    console.tron.log(data);
    yield put(signInSuccess(data));
  } catch (error) {
    Alert.alert(
      'Falha na autenticação',
      'Erro ao efetuar Login, verifique seu ID de Acesso'
    );
    yield put(signFailure());
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
