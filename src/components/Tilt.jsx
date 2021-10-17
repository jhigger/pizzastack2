import React from 'react';
import {Icon} from '@chakra-ui/react';

export default function Tilt({fill}) {
	return (
		<Icon
			zIndex="1"
			position="absolute"
			bottom="-1"
			w="full"
			h="min"
			transform={('scaleX(-1)', 'scaleY(-1)')}
			data-name="Layer 1"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 1200 120"
			preserveAspectRatio="none"
		>
			<path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" fill={fill}></path>
		</Icon>
	);
}
