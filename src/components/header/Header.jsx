import { useState, useEffect, useContext } from 'react'
import {Link, NavLink, useNavigate} from 'react-router-dom'
import HamburgerMenuBtn from './HamburgerMenuBtn'
import MenuContext from '../../context/menuContext';


function Header() {


    const navigate = useNavigate();
    const [viewPort, setViewPort] = useState(window.innerWidth);

    useEffect(() => {

    const handleResize = () => setViewPort(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);

    }, []);


    const menuListItems = useContext(MenuContext);
  
  
    return (
        <>        
            <header className='fixed top-0 left-0 right-0 z-9999999 border-b-2 border-black'>
                <nav className='flex flex-row justify-between tablet:justify-start tablet:gap-10 items-center bg-white min-h-15 min-w-full px-8 py-4 '>
                    <div className="logo uppercase cursor-pointer font-bold text-2xl text-light-yellow text-shadow-black text-shadow-[4px_4px_0_rgba(1,1,1,1)] hover:scale-105 hover:text-shadow-[8px_8px_0_rgba(1,1,1,1)] transform transition-all duration-200 ease-in-out active:scale-95 active:text-shadow-[2px_2px_0_rgba(1,1,1,1)">
                        <Link to="/">
                            Shovon
                        </Link>
                    </div>
                    <div className='nav-menu  grow flex flex-row justify-end items-center'>
                        
                        {
                            viewPort > 768 ?  (<ul className='flex flex-row gap-4 justify-center'>
                                {
                                    menuListItems.map(item=><li className='cursor-pointer' key={item.path}>
                                            {<NavLink to={item.path} className={({isActive})=>`${isActive? "font-bold":"font-normal"}`}>
                                                {item.label}
                                            </NavLink>}
                                    </li>)
                                }
                            </ul>) : <HamburgerMenuBtn menuListItems={menuListItems}/>
                        }
                    </div>

                    <div className="reg-log-btns flex flex-row gap-4">
                        {
                            viewPort > 768? <><button className='rounded-full font-bold border px-4 py-1 shadow-[2px_2px_0_rgba(1,1,1,1)] hover:shadow-[8px_8px_0_rgba(1,1,1,1)] active:shadow-[2px_2px_0_rgba(1,1,1,1)] transform transition-all duration-200 ease-in-out cursor-pointer'
                            onClick={()=>navigate("/register")}
                            >Register</button>
                            <button className='rounded-full font-bold border px-4 py-1 shadow-[2px_2px_0_rgba(1,1,1,1)] hover:shadow-[8px_8px_0_rgba(1,1,1,1)] active:shadow-[2px_2px_0_rgba(1,1,1,1)] transform transition-all duration-200 ease-in-out cursor-pointer'
                            onClick={()=>navigate("/login")}
                            >Login</button></>:"" 
                        }
                        
                    </div>

                </nav>
            </header>
        </>
  )
}

export default Header