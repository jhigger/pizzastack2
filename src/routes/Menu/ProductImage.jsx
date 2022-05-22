import {Image} from '@chakra-ui/react';

const ProductImage = ({image, alt, ...props}) => {
	const src = new URL(`../../assets/images/${image}`, window.location.origin)
		.href;
	return (
		<Image
			src={src}
			fallbackSrc="https://via.placeholder.com/250?text=image"
			alt={alt}
			minW="full"
			minH="min"
			boxSize="2xs"
			objectFit="cover"
			bg="blackAlpha.900"
			borderTopLeftRadius={'3xl'}
			borderTopRightRadius={'3xl'}
			{...props}
		/>
	);
};

export default ProductImage;
