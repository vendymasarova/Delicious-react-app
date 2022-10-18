import React from 'react'
import {FaPizzaSlice, FaHamburger} from 'react-icons/fa';
import {GiNoodles, GiChopsticks} from 'react-icons/gi'
import styled from "styled-components";
import {NavLink} from 'react-router-dom';

const Category = () => {
  return (
    <List>
      <NavLink to={'cuisine/Italian'}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </NavLink>
      <NavLink to={'cuisine/American'}>
        <FaHamburger/>
        <h4>American</h4>
      </NavLink>
      <NavLink to={'cuisine/Thai'}>
        <GiNoodles />
        <h4>Thai</h4>
      </NavLink>
      <NavLink to={'cuisine/Japanes'}>
        <GiChopsticks />
        <h4>Japanes</h4>
      </NavLink>
    </List>
  )
}

const List = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
`

export default Category