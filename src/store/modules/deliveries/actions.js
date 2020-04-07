export function withDraw(id, deliveryManId) {
  return {
    type: '@delivery/WITHDRAW_REQUEST',
    payload: { id, deliveryManId },
  };
}

export function withDrawSuccess(id) {
  return {
    type: '@delivery/WITHDRAW_SUCCESS',
    payload: { id },
  };
}
