import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ISurvey } from "types/Survey";

interface IAnswersState {
  data: ISurvey[] | null;
  loading: boolean;
  total: number;
}

export const initialState: IAnswersState = {
  data: null,
  loading: false,
  total: 0,
};

const surveySlice = createSlice({
  name: "survey",
  initialState,
  reducers: {
    setLoading: (state: IAnswersState, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setData: (
      state: IAnswersState,
      action: PayloadAction<{ data: ISurvey[] }>
    ) => {
      const { data } = action.payload;
      state.data = data;
    },
    setAnswer: (
      state: IAnswersState,
      action: PayloadAction<{ id: number; answer: number }>
    ) => {
      const { id, answer } = action.payload;

      if (state.data) {
        const index = state.data.findIndex((el) => el.questionId === id);

        state.data[index].answer = answer;
        state.data[index].isAnswered = true;
      }
    },
    setReset: (state: IAnswersState) => {
      state.data = null;
      state.total = 0;
    },
    setTotal: (
      state: IAnswersState,
      action: PayloadAction<{ val: number }>
    ) => {
      state.total = action.payload.val;
    },
  },
});

export const { setLoading, setData, setAnswer, setReset, setTotal } =
  surveySlice.actions;

export default surveySlice.reducer;
