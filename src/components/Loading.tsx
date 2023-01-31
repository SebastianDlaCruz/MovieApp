import { ImageLoading, LoadingStyle } from "@styled/components/Loading.styled";
import { useEffect, useState } from "react";
import logo from "/img/logo.png";
import nameApp from "/img/nameApp.png";

const Loading = () => {
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setTimeout(() => setLoading(!loading), 5000);
	}, []);

	return (
		<LoadingStyle isActive={!loading}>
			<ImageLoading src={logo} alt="logo" isActive={loading} />
			<div>
				<img src={logo} alt="logo" />
				<img src={nameApp} alt="nameApp" />
			</div>
		</LoadingStyle>
	);
};

export default Loading;
