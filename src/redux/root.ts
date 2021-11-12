const root: any = {
  defaultState: {
    login: false
  },
  reducer: (state = root.defaultState, action: any) => {
    switch (action.type) {
      case "refreshState":
        const { payload: { key, data } } = action;
        state[key] = data;
        return Object.assign({}, state)
      default:
        return state;
    }
  },
  saga: {
    every: {
      *changeLogin(sagaEffect: any, data: any) {
        yield sagaEffect.put({
          type: 'refreshState',
          payload: data.payload
        })
      }
    },
    latest: {

    }
  }
}

export default root;