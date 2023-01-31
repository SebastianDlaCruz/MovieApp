import { ImageStyled } from "@styled/components/Image.styled";
type Props = {
	src: string;
	alt: string;
	isResponsive: boolean;
	source?: string;
	media?: string;
};

const Image = ({ src, alt, isResponsive, source, media }: Props) => {
	let component;

	if (isResponsive) {
		component = (
			<picture>
				<source media={media} srcSet={source} />
				<ImageStyled src={src} alt={alt} loading='lazy' />
			</picture>
		);
	} else {
		component = <ImageStyled src={src} alt={alt} loading='lazy' />;
	}

	return <>{component}</>;
};

export default Image;
