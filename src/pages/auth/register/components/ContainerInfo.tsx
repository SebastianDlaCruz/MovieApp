import { ContainerInfoStyled } from "../styled-components/layout";

export default function ContainerInfo() {
	return (
		<ContainerInfoStyled>
			<strong>Benefits of your free IMDb account</strong>
			<ul>
				<li>
					<b>Personalized Recommendations</b>
					<p>Discover shows you'll love.</p>
				</li>
				<li>
					<b>Your Ratings</b>
					<p>Rate and remember everything you've seen.</p>
				</li>
				<li>
					<b>Contribute to IMDb</b>
					<p>
						Add data that will be seen by millions of people and get cool
						badges.
					</p>
				</li>
			</ul>
		</ContainerInfoStyled>
	);
}
