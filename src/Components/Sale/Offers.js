import {motion } from 'framer-motion';

export const Offers = () => {
    return(<motion.div  initial ={{x: -1000}}
        animate={{x:0}}
        transition={{
           duration:"3",
        }}>
        <p className="sale">Enjoy 20% off your first order </p>
        </motion.div>)
}