import { createContext } from "react";

const MenuContext = createContext([
        {
            label:"Home",
            path:"/",
        },
        {
            label:"About",
            path:"/about",
        },
        {
            label:"Contact",
            path:"/contact",
        },    
    ])

export default MenuContext

