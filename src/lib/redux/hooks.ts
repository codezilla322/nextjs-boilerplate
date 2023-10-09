import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from "react-redux";
import type { AppDispatch, RootState } from "./store";

export const useReduxDispatch: () => AppDispatch = useDispatch;
export const useReduxSelector: TypedUseSelectorHook<RootState> = useSelector;
