'use client';

import { createContext, useState } from "react";
export const Context = createContext(null);

function DataContext({ children }) {

    const [isArabic, setIsArabic] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isMenu, setIsMenu] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [selectedRouter, setSelectedRouter] = useState('Home');
    const [cartItems, setCartItems] = useState([]);
  
    return (
        <Context.Provider value={{ 
            isArabic, setIsArabic,
            isDarkMode, setIsDarkMode,
            selectedRouter, setSelectedRouter,
            isMenu, setIsMenu,
            isMobile, setIsMobile,
            cartItems, setCartItems
        }}>
            {children}
        </Context.Provider>
    );
};

export default DataContext;