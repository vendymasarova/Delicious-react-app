import React, {useState, useEffect} from 'react'
import styled from "styled-components";
import { Splide, SplideSlide } from '@splidejs/react-splide'
import {Link} from 'react-router-dom'
import Loader from './Loader';
import Error from './Error';

const Veggie = () => {
  const [veggie, setVeggie] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false)

  useEffect(() => {
    getveggie();
  }, [])

  const getveggie = async () => {

    const check = localStorage.getItem('veggie');

    if (check) {
      setVeggie(JSON.parse(check))
    } else {
      const apiVeggie = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`)
      .then((data) => data.json())
      .then((res) => {
        const veggieRes = res.recipes;
        setVeggie(veggieRes)
      })
      .catch(() => setError(true))
      localStorage.setItem('veggie', JSON.stringify(apiVeggie))
      setIsLoaded(true)
    }
  }
  return (
    <>
    {isLoaded && !error && (
      <Wrapper>
        <h3>Vegetarian Picks</h3>
        <Splide options={{
          perPage: 3,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "2rem",
        }}>
          {veggie.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Card>
                  <Link to={"/recipe/" + recipe.id}>
                    <Title>{recipe.title}</Title>
                    <img src={recipe.image} alt={recipe.title} />
                    <Gradient />
                  </Link>
                </Card>
              </SplideSlide>
            )
          })}
        </Splide>
      </Wrapper>
    )}
      {!isLoaded && !error && (
        <WrapperLoader>
          <Loader />
        </WrapperLoader>
      )}
      {error && (<Error />)}
    </>
  )
}

const Wrapper = styled.div`
  margin: 4rem 0rem;
`

const WrapperLoader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Card = styled.div`
  min-height: 25rem;
  position: relative;
  overflow: hidden;
  border-radius: 2rem;

  img {
    position: absolute;
    left: 0;
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

export default Veggie