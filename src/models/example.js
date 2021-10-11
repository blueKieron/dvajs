
export default {

  namespace: 'example',

  state: { example: 'example'},

  reducers: {
    setExample(state, payload) {
      console.log('1',payload)
      return { ...state, example: payload.data.example };
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
  },


};
