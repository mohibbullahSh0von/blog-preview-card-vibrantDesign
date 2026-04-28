import {useState} from 'react'
import {NavLink, useNavigate } from 'react-router-dom';

function HamburgerMenuBtn({menuListItems}) {


    const navigate = useNavigate();
    const [btnClicked, setBtnClicked] = useState(false);

    const handleBtnClick = ()=>{
        setBtnClicked(!btnClicked);
    }

  return (
    <div className="menu-wrapper">
        <button className='hamburger-btn cursor-pointer w-10 h-8 shadow-[2px_2px_0_rgba(1,1,1,1)] flex flex-row justify-center items-center p-2 rounded border hover:scale-105 hover:shadow-[6px_6px_0_rgba(1,1,1,1)] transform transition-all duration-200 ease-in-out active:scale-95 active:shadow-[2px_2px_0_rgba(1,1,1,1)]'
            onClick={()=>handleBtnClick()}
        >
            <div className="wrapper relative w-full h-full">
                <span className={`${btnClicked? "top-[50%] translate-y-[-50%] rotate-45":""} left-0 inline-block min-w-full min-h-[2px] bg-black absolute top-0 transform transition-all duration-200 ease-in-out`}></span>
                <span className={`${btnClicked? "hidden":"inline-block"}  left-0  min-w-full min-h-[2px] bg-black absolute top-[50%] translate-y-[-50%] transform transition-all duration-200 ease-in-out`}></span>
                <span className={`${btnClicked?"bottom-[50%] translate-y-[50%] -rotate-45":""} left-0 inline-block min-w-full min-h-[2px] bg-black absolute bottom-0 transform transition-all duration-200 ease-in-out`}></span>
            </div>
        </button>

        <ul className={`${btnClicked? "flex":"hidden"} absolute z-1000 bottom-0 right-[10%] translate-y-[110%] border-black border-2 shadow-[4px_4px_10px_rgba(1,1,1,0.2)] flex flex-col px-4 py-2 rounded-lg bg-white min-w-[40%] `}>
            {
                menuListItems.map(item=><li className='cursor-pointer border-b' key={item.label}>
                        {<NavLink to={item.path} className={({isActive})=>`${isActive? "font-bold":"font-normal"}`}>
                            {item.label}
                        </NavLink>}
                    </li>)
            }
            <div className='auth-section flex flex-col justify-start items-start gap-2 my-4 w-full'>
                
                <button className='rounded-full font-bold border px-4 py-1 shadow-[2px_2px_0_rgba(1,1,1,1)] hover:shadow-[8px_8px_0_rgba(1,1,1,1)] active:shadow-[2px_2px_0_rgba(1,1,1,1)] transform transition-all duration-200 ease-in-out cursor-pointer w-full'
                onClick={()=>navigate("/register")}
                >Register
                </button>
                <button className='rounded-full font-bold border px-4 py-1 shadow-[2px_2px_0_rgba(1,1,1,1)] hover:shadow-[8px_8px_0_rgba(1,1,1,1)] active:shadow-[2px_2px_0_rgba(1,1,1,1)] transform transition-all duration-200 ease-in-out cursor-pointer w-full'
                onClick={()=>navigate("/login")}
                >Login
                </button>
            </div>
        </ul>

    </div>
  )
}

export default HamburgerMenuBtn