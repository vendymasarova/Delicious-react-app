import React from 'react'
import {FaPizzaSlice, FaHamburger} from 'react-icons/fa';
import {GiNoodles, GiChopsticks} from 'react-icons/gi'
import styled from "styled-components";
import {NavLink} from 'react-router-dom';

const Category = () => {
  return (
    <List>
      <SLink to={'cuisine/Italian'}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </SLink>
      <SLink to={'cuisine/American'}>
        <FaHamburger/>
        <h4>American</h4>
      </SLink>
      <SLink to={'cuisine/Thai'}>
        <GiNoodles />
        <h4>Thai</h4>
      </SLink>
      <SLink to={'cuisine/Vietnamese'}>
        <GiChopsticks />
        <h4>Vietnamese</h4>
      </SLink>
    </List>
  )
}

const List = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
`

const SLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 50%;
  text-decoration: none;
  margin-right: 2rem;
  background: linear-gradient(35deg, #494949, #313131);
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transform: scale(0.8);

  h4 {
    color: white;
    font-size: 0.8rem;
    margin-top: 0.5rem;
    margin-bottom: 0;
  }
  
  svg {
    font-size: 1.5rem;
    color: white;
  }

  &.active {
    background: linear-gradient(to right, #f27121, #e94057);

    svg {
      color: white;
    }

    h4 {
      color: white;
    }
  }
`

export default Category