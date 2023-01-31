import { ConfirmedStyled } from "../styled-components/layout";
export default function Confirmed() {
	return (
		<ConfirmedStyled>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="124"
				height="124"
				viewBox="0 0 124 124"
			>
				<circle
					cx="62"
					cy="62"
					r="59"
					fill="none"
					stroke="#be8aef"
					strokeWidth="6px"
				/>
				<circle
					cx="62"
					cy="62"
					r="59"
					fill="none"
					stroke="#3DD2CC"
					strokeWidth="6px"
					strokeLinecap="round"
				/>
				<polyline
					points="73.56 48.63 57.88 72.69 49.38 62"
					fill="none"
					stroke="#3DD2CC"
					strokeWidth="6px"
					strokeLinecap="round"
				/>
			</svg>
			<p>Processing...</p>
		</ConfirmedStyled>
	);
}
