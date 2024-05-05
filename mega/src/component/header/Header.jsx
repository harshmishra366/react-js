import React from 'react';
import { Container, Logo, LogoutBtn } from '../index';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    {
      name: 'Home',
      slug: '/',
      active: true
    },
    {
      name: 'Login',
      slug: '/login',
      active: !authStatus
    },
    {
      name: 'Signup',
      slug: '/signup',
      active: !authStatus
    },
    {
      name: 'All Posts',
      slug: '/all-posts',
      active: authStatus
    },
    {
      name: 'Add Post',
      slug: '/add-post',
      active: authStatus
    }
  ];

  console.log('authStatus:', authStatus);
  console.log('navItems:', navItems);

  return (
    <header className='py-3 shadow bg-gray-500'>
      <Container>
        <nav className='flex'>
          <div className='mr-4'>
            <Link to='/'>
              <Logo width='70px' />
            </Link>
          </div>
          <ul className='flex ml-auto'>
            {navItems.map(
              (item) =>
                item.active && (
                  <li key={item.name}>
                    <button
                      onClick={() => navigate(item.slug)}
                      className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                    >
                      {item.name}
                    </button>
                  </li>
                )
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}



/*  import React from "react";
import {Container,Logo,LogoutBtn} from '../index'
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Header(){
    const authStatus = useSelector((state) => state.auth.status)
    const navigate= useNavigate()
    const navitem=[{
        name: 'Home',
        slug: "/",
        active: true
      }, 
      {
        name: "Login",
        slug: "/login",
        active: !authStatus,
    },
    {
        name: "Signup",
        slug: "/signup",
        active: !authStatus,
    },
    {
        name: "Allposts",
        slug: "/all-posts",
        active: authStatus,
    },
    {
        name: "Add Post",
        slug: "/add-post",
        active: authStatus,
    },]
    return(
<Container>
    <div>
        <Link to='/'>
            <Logo/>
        
        </Link>
    </div>
    <div>
        <ul>
        {navitem.map((item)=>(
            item.active ?(
                <li key={item.name}>
                   
                    <button onClick={()=>navigate(item.slug)} className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                      >{item.name}</button>
                   

                </li>
            ) : null

        ))}
        {
            authStatus && (
                <li>
                    <LogoutBtn />
                </li>
            )
        }
        </ul>
    </div>
</Container>
        
    )
} */