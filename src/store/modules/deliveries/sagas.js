import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';

// import { withDrawSuccess } from './actions';

export function* withDrawDelivery({ payload }) {
  try {
    const { id, deliveryManId } = payload;
    const response = yield call(api.put, `/deliveries/${id}/start`, {
      deliveryman_id: deliveryManId,
    });

    if (response.data.error) {
      Alert.alert('Falha ao Retirar Encomenda!', response.data.error);
      return;
    }

    Alert.alert('Encomenda Retirada!!!');
  } catch (error) {
    Alert.alert('Falha Geral Retirar Encomenda!', error.response.data.error);

    // yield put(signFailure());
  }

  // try {
  //   await api.put(`/deliveries/${id}/start`, {
  //     deliveryman_id: delivery.deliveryman_id,
  //   });

  //   setStatusAux('RETIRADA');
  //   setStartDateAux(format(new Date().getTime(), 'dd/MM/yyyy'));

  //   Alert.alert('Encomenda Retirada!!!');
  // } catch (error) {
  //   Alert.alert('Falha ao Retirar Encomenda!', error.response.data.error);
  // }
}

export default all([
  takeLatest('@delivery/WITHDRAW_REQUEST', withDrawDelivery),
]);
