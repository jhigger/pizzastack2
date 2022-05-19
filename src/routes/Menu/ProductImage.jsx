import {Image} from '@chakra-ui/react';

const ProductImage = ({src, alt}) => {
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
		/>
	);
};

export default ProductImage;
