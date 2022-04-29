import { useDispatch } from "react-redux";
import { setReset } from "redux/reducers/surveyReducer";

export const useReset = () => {
  const dispatch = useDispatch();

  return () => {
    dispatch(setReset());
  };
};
