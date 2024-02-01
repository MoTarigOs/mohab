import { motion } from "framer-motion";

const ToggleButton = ({ isActive, setIsActive, isArabic }) => {
    

    const handleToggle = () => {
        if(isActive) {
            setIsActive(false);
        } else {
            setIsActive(true);
        }
    };
  
    return (

        <motion.div className='toggle' onClick={handleToggle}
        initial={{ background: 'white', x: 0 }}
        animate={{ 
            background: isActive ? 'orange' : 'white'
        }}
        >

            <motion.div 
            initial={{ background: '#999', x: 0 }}
            animate={{ 
                background: isActive ? 'white' : '#999',
                x: isActive ? (isArabic ? -16 : 16) : 0
            }}
            />
            
        </motion.div>

    )
};

export default ToggleButton;
