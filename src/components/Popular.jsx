import React, {useEffect, useState} from 'react'
import styled from "styled-components";
import {Splide, SplideSlide} from '@splidejs/react-splide'
import "@splidejs/splide/dist/css/splide.min.css"

const Popular = () => {
  const [popular, setPopular] = useState([])

  useEffect(() => {
    getPopular();
  }, [])

  const getPopular = async () => {

    const check = localStorage.getItem('popular');

    if (check) {
      setPopular(JSON.parse(check))
    } else {
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);
      const data = await api.json();
      localStorage.setItem('popular', JSON.stringify(data.recipes))
      setPopular(data.recipes)
    }

   
  }


  return (
    <>
      <Wrapper>
        <h3>Popular Picks</h3>
        <Splide options={{
          perPage: 4, 
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "5rem",
        }}>
          {popular.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Card>
                  <Title>{recipe.title}</Title>
                  <img src={recipe.image} alt={recipe.title} />
                  <Gradient />
                </Card>
              </SplideSlide>
            )
          })}
        </Splide>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  margin: 4rem 0rem
`

const Card = styled.div`
  min-height: 25rem;
  position: relative;
  overflow: hidden;

  img {
    position: absolute;
    left: 0;
    border-radius: 2rem;
    height: 100%;
    width: 100%;
    object-fit: cover
  }
`

const Title = styled.p`
  position: absolute;
  bottom: 0%;
  left: 50%;
  transform: translate(-50%, 0%);
  text-align: center;
  font-weight: 600;
  font-size: 1rem;
  height: 40%;
  z-index: 9;
  color: #fff
`

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5))
`

export default Popular