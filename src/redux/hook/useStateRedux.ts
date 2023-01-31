import type { RootState } from "@rdx/store";
import type { TypedUseSelectorHook } from "react-redux";
import { useSelector } from "react-redux";

export const useStateRedux: TypedUseSelectorHook<RootState> = useSelector;
