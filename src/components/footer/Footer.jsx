import {Link, NavLink} from 'react-router-dom'
import MenuContext from '../../context/menuContext'
import { useContext } from 'react'
import fbIcon from '../../assets/images/facebook.svg'
import instaIcon from '../../assets/images/instagram.svg'
import twitterIcon from '../../assets/images/twitter.svg'
import whatsappIcon from '../../assets/images/whatsapp.svg'


function Footer() {

  const footerMenuItems = useContext(MenuContext);


  return (
    <footer className='footer w-full border-t-2'>
        <div className="wrapper flex flex-col tablet:flex-row justify-start tablet:justify-evenly items-center gap-8  py-8">
            <div className=" logo uppercase cursor-pointer font-bold text-2xl text-light-yellow text-shadow-black text-shadow-[4px_4px_0_rgba(1,1,1,1)] hover:scale-105 hover:text-shadow-[8px_8px_0_rgba(1,1,1,1)] transform transition-all duration-200 ease-in-out active:scale-95 active:text-shadow-[2px_2px_0_rgba(1,1,1,1)">
                <Link to="/" >
                    Shovon
                </Link>
        </div>

        <div className="footer-menu">
       
          <ul className='flex flex-col justify-start items-start tablet:items-center'>
              {
                 footerMenuItems.map(item=><li className='cursor-pointer' key={item.path}>
                          {<NavLink to={item.path} className={({isActive})=>`${isActive? "font-bold":"font-normal"}`}>
                              {item.label}
                          </NavLink>}
                  </li>)
              }
          </ul>
        </div>

        <div className="social-links">
          <ul className='flex flex-row justify-center items-center  gap-5' >
            <li className='cursor-pointer w-8'   >
              <Link to="https://www.facebook.com/" target='_blank' rel='noopener noreferer'>
                <img src={fbIcon} alt="facebook" />
              </Link>
            </li>
            <li className='cursor-pointer w-8'  >
              <Link to="https://www.facebook.com/" target='_blank' rel='noopener noreferer'>
                <img src={instaIcon} alt="instagram" />
              </Link>
            </li>
            <li className='cursor-pointer w-8'  >
              <Link to="https://www.facebook.com/" target='_blank' rel='noopener noreferer'>
                <img src={twitterIcon} alt="twitter" />
              </Link>
            </li>
            <li className='cursor-pointer w-8'  >
              <Link to="https://www.facebook.com/" target='_blank' rel='noopener noreferer'>
                <img src={whatsappIcon} alt="whatsapp" />
              </Link>
            </li>
          </ul>
        </div>

        </div>

        <div className='copyright'>
              <p className='bg-black text-white w-full p-2 text-center'>&copy; <span className='company uppercase text-light-yellow'>Shovon</span> <span className='year'>{new Date().getFullYear()}</span>, all rights reserverd</p>
        </div>

    </footer>
  )
}

export default Footer