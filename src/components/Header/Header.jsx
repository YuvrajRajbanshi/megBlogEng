import React from 'react'
import { Container } from "../container/Container"
import { Logo } from "../container/Logo"
import { Link } from 'react-router-dom'
import LogoutBtn from './LogoutBtn'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'



function Header() {
    const authStatus = useSelector((state) => state.auth.status)

    const navigate = useNavigate()

    const navItems = [
        {
            name: "Home",
            slug: "/",
            active: true
        },
        {
            name: "Login",
            slug: "/login",
            active: !authStatus
        },
        {
            name: "Signup",
            slug: "/signup",
            active: !authStatus
        },
        {
            name: "All Posts",
            slug: "/all-post",
            active: authStatus
        },
        {
            name: "Add Posts",
            slug: "/add-post",
            active: authStatus
        }
    ]



    return (
        <header className='py-3  shadow bg-gray-500'>
            <Container>
                <nav className='flex'>

                    <div className='mr-4'>
                        <Logo />
                    </div>
                </nav>
                <ul className='flex ml-auto'>
                    {
                        navItems.map((item) => item.active ? (
                            <li key={item.name}>
                                <button
                                    onClick={() => navigate(item.slug)}
                                    className='inline-block px-6 py-2
                                    duration-200 hover:bg-blue-100
                                    rounded-full
                                    '>
                                    {item.name}
                                </button>
                            </li>
                        ) : null)

                    }


                    {
                        authStatus && (
                            <li>
                                <LogoutBtn />
                            </li>
                        )
                    }

                </ul>
            </Container>

        </header>
    )
}

export default Header