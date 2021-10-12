import * as apis from "../services/example";

export default {
  namespace: "examplenamespace",

  state: { example: "example", cnode: [] },

  reducers: {
    setExample(state, payload) {
      console.log("1", payload);
      return { ...state, example: payload.data.example };
    },
    setCnode(state, payload) {
      return { ...state, cnode: payload.data.cnode };
    },
    setPath(state, payload) {
      return state;
    },
  },
  effects: {
    *setExampleAsync({ payload }, { call, put }) {
      yield put({
        type: "setExample",
        data: {
          example: "newExampleGetAsync",
        },
      });
    },
    *getCnodeAsync({ payload }, { call, put }) {
      let res = yield call(apis.getExample);
      if (res.data) {
        yield put({
          type: "setCnode",
          data: {
            cnode: res.data.data,
          },
        });
      }
    },
    *fetch({ payload }, { call, put }) {
      // eslint-disable-line
      yield put({ type: "save" });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      // eslint-disable-line
      history.listen(({ pathname }) => {
        if (pathname === "/user") {
          dispatch({
            type: "setPath",
          });
        }
      });
    },
  },
};
