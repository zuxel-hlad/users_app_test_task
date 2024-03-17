import { motion } from 'framer-motion';

const animations = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        x: 0
    },
    exit: {
        opacity: 0
    }
};

const PageTransition = ({ children }) => {
    return (
        <motion.div
            variants={animations}
            transition={{ duration: 0.5 }}
            initial="initial"
            animate="animate"
            exit="exit">
            {children}
        </motion.div>
    );
};

export default PageTransition;
