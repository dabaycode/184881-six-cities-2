export const login = (state, dispatch, getState, api) => {

  return api
    .post(`/login`, {
      email: state.login,
      password: state.password
    })
    .then((respond) => {
      if (respond.status === 200) {
        dispatch({
          type: `CHANGE_LOGIN_STATUS`,
          payload: !getState().app.isAuthorizationRequired
        });

        dispatch({
          type: `SET_USER_INFO`,
          payload: respond.data
        });
      }
    });
};
