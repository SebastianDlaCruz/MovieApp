import { createContext } from "react";

type propsContextCarrousel = {
	moveImageRight: () => void;
	moveImageLeft: () => void;
};

export const UseContextCarrousel = createContext<propsContextCarrousel>(null!);
