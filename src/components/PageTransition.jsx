import {motion} from 'framer-motion';

const PageTransition = ({children}) => {
	return (
		<motion.div
			key={children}
			initial={{opacity: 0, y: '-1%'}}
			animate={{opacity: 1, y: '0%'}}
			exit={{opacity: 0, y: '1%'}}
			transition={{duration: 0.3}}
		>
			{children}
		</motion.div>
	);
};

export default PageTransition;
