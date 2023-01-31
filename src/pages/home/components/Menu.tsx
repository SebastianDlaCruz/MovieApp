import { ItemMenu, MenuStyled } from "../styled-components/layout.styled";

// rome-ignore lint/suspicious/noExplicitAny: <explanation>
function Menu(nameItem: string[], imgItem?: string[]): any {
	let numberItems = nameItem.length;
	let numberImg = imgItem?.length;

	const menuImages = () => {
		const elements = [];
		if (imgItem !== undefined && numberImg !== undefined) {
			for (let i = 0; i < numberItems; i++) {
				elements.push(
					<li key={i}>
						<ItemMenu href={nameItem[i].trim()}>
							<img src={imgItem[i]} alt={nameItem[i].slice(1)} />
							<span>{nameItem[i].slice(1)}</span>
						</ItemMenu>
					</li>,
				);
			}
		}

		return elements;
	};

	return () => {
		if (imgItem === undefined) {
			return (
				<MenuStyled>
					{nameItem.map((item, i) => (
						// rome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						<ItemMenu key={i}>
							<a href={item}>{item.slice(1)}</a>
						</ItemMenu>
					))}
				</MenuStyled>
			);
		} else if (imgItem !== undefined && numberImg === numberItems) {
			return <MenuStyled>{menuImages()}</MenuStyled>;
		}
	};
}

export default Menu;
