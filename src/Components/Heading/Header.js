import {motion } from 'framer-motion';

export const Header = () => {
    return(<div className="header">

        <motion.div className='header-items'
    initial ={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{
    duration:"4",
    }}>
        <h1> Elizabeth's flowers</h1>
        <h2>Same Day Flower Delivery</h2>
        <h3>100% satisfaction garanteed!</h3>
        </motion.div>

        </div>)
}