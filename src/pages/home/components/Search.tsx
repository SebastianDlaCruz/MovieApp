import { ButtonSearch, SearchStyled } from "../styled-components/layout.styled";
import search from "/icons/Search.svg";

function Search() {
	return (
		<SearchStyled>
			<ButtonSearch img={search} />
			<input type="text" placeholder='Search for movies, TV shows...' />
		</SearchStyled>
	);
}

export default Search;
