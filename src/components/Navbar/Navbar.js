import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import * as HeroIcons from 'react-icons/hi'
import * as AiIcons from 'react-icons/ai'
import { IconContext } from 'react-icons/lib'

const Nav = styled.div`
  background: black;
  height: 80px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  opacity: 0.5;
`
const NavIcon = styled(Link)`
  margin-right: 2rem;
  font-size: 2.5rem;
  height: 80px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  opacity: 1;
  transition: all 300ms ease-in;
  &:hover {
    transition: all 300ms ease-out;
  }
`
const DropNav = styled.nav`
  background: black;
  opacity: 0.5;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: ${({ dropdown }) => (dropdown ? '0' : '-100%')};
  transition: 400ms;
  z-index: 10;
`

const DropWrap = styled.div`
  width: 100%;
`
function Navbar() {
  const [dropdown, setDropdown] = useState(false)
  const showDropdown = () => setDropdown(!dropdown)

  return (
    <div>
      <IconContext.Provider value={{ color: 'white' }}>
        <Nav>
          <NavIcon to='#'>
            <HeroIcons.HiMenu onClick={showDropdown} />
          </NavIcon>
        </Nav>

        <DropNav dropdown={dropdown}>
          <DropWrap>
            <NavIcon to='#'>
              <AiIcons.AiOutlineClose onClick={showDropdown} />
            </NavIcon>
          </DropWrap>
        </DropNav>
      </IconContext.Provider>
    </div>
  )
}

export default Navbar
