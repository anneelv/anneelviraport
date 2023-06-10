import Link from 'next/link';
import React, {useState, useEffect} from 'react';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [color, setColor] = useState('transparent')
    const [textColor, setTextColor] = useState('white')

    const handleNav = () => {
        // set the state into the opposite
        setNav(!nav) 
    }

    // change color of the navigation bar when notice the change in window position
    useEffect(() => {
        const changeColor = () => {
            if(window.scrollY >= 90)
            {
                setColor('white')
                setTextColor('black')
            } else {
                setColor('transparent')
                setTextColor('white')
            }
        }
        // trigger the changeColor function when it notice scroll in the window
        window.addEventListener('scroll', changeColor)
    }, []);

    return (
        // color inside style will be called from the variable
      <div style = {{backgroundColor: `${color}`}} className = 'fixed left-0 top-0 w-full z-10 ease-in duration-300'>
        <div className = 'max-w-[1240px] m-auto flex justify-between items-center p-4 text-white text-xl'>
            <Link href='/'>
                <h1 style = {{color: `${textColor}`}} className = ' font-bold text-4xl'>Portfolios</h1>  
            </Link>
            {/* Make it so that when the size of screen is smaller, it will show only the hamburger button */}
            <ul style = {{color: `${textColor}`}} className = 'hidden sm:flex'>
                <NavItem2 href='/' text='Home' />
                <NavItem2 href='/projects' text='Projects' />
                <NavItem2 href='/others' text='Others' />
                <NavItem2 href='/contact' text='Contact' />
            </ul>


            {/* Mobile Button, anything above small (sm) will show else will be hidden */}
            <div onClick={handleNav} className = 'block sm:hidden z-10'>
                {/* Set the state for when the nav is true or false, currently by default is false */}
                {nav ? 
                // Keep the color of close button white because no matter what it will be on a black background
                <AiOutlineClose size={20} style = {{color: `white`}} /> : 
                <AiOutlineMenu size={20} style = {{color: `${textColor}`}} />}
            </div>
            {/* Mobile Menu, the separator between state is ":" -> if true, else false */}

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={nav ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className={
                    nav
                    ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen text-center bg-black '
                    : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen text-center bg-black'
                }
                >
                <ul>
                <NavItem href="/" text="Home" />
                <NavItem href="/projects" text="Projects" />
                <NavItem href="/others" text="Others" />
                <NavItem href="/contact" text="Contact" />
                </ul>
                
            </motion.div>   

            {/* <div className = {nav ? 
            'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in-out duration-500' :
            'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-center ease-in-out duration-500'}>
                <ul>
                    <NavItem href='/' text='Home' />
                    <NavItem href='/projects' text='Projects' />
                    <NavItem href='/others' text='Others' />
                    <NavItem href='/contact' text='Contact' />
                </ul>
            </div> */}
        </div>
      </div>
    );
};

// const NavItem2 = ({ href, text }) => {
//     return (
//       <li className='p-4 text-xl hover:text-blue-500 hover:scale-110'>
//           <Link href={href}>{text}</Link>
//       </li>
//     );
// };

// Make the animation of hovering smoother
const NavItem2 = ({ href, text }) => {
    return (
        <motion.li className="p-4 text-xl">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="hover:text-blue-500"
        >
          <Link href={href}>{text}</Link>
        </motion.div>
      </motion.li>
    );
};

// const NavItem = ({ href, text }) => {
//     return (
//       <li className='p-4 text-4xl hover:text-blue-500 hover:scale-110'>
//         <Link href={href}>{text}</Link>
//       </li>
//     );
// };

// TODO - Hover effect is not working at all for the Mobile Menu
const NavItem = ({ href, text }) => {
    return (
        <li className="p-4 text-4xl">
        <motion.div
          whileHover={{ scale: 1.2 }}
          className="hover:text-blue-500"
        >
          <a href={href}>{text}</a>
        </motion.div>
        </li>
    );
};

export default Navbar;