import { motion } from 'framer-motion';
const Main = ({ children }) => {
    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="font-poppins text-secondary-200"
        >
            {children}
        </motion.main>
    );
};

export default Main;
