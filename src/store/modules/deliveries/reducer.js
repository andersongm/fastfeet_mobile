import produce from 'immer';

const INITIAL_STATE = {
  delivery_status: 'PENDENTE',
};

export default function deliveries(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@delivery/WITHDRAW_REQUEST': {
        draft.delivery_status = 'RETIRADA';
        break;
      }
      // case '@auth/SIGN_IN_SUCCESS': {
      //   draft.signed = true;
      //   draft.loading = false;
      //   break;
      // }
      // case '@auth/SIGN_FAILURE': {
      //   draft.loading = false;
      //   break;
      // }
      // case '@auth/SIGN_OUT': {
      //   draft.signed = false;
      //   break;
      // }
      default:
    }
  });
}
