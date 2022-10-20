import React, {useEffect, useState} from 'react'
import styled from "styled-components";
import {Splide, SplideSlide} from '@splidejs/react-splide'
import "@splidejs/splide/dist/css/splide.min.css"
import {Link} from 'react-router-dom'
import Loader from './Loader';
import Error from '../components/Error'

const Popular = () => {
  const [popular, setPopular] = useState([])
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false)

  useEffect(() => {
    getPopular();
  }, [])

  const getPopular = async () => {

    // const check = localStorage.getItem('popular');

    // if (check) {
    //   setPopular(JSON.parse(check))
    // } else {
       await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`)
      .then((data) => data.json())
      .then((res) => {
        const recipes = res.recipes;
        setPopular(recipes)
      })
      .catch(() => setError(true))
      // localStorage.setItem('popular', JSON.stringify(api))
      setIsLoaded(true)
    // }
  }

  console.log(popular)

  return (
    <>
    {isLoaded && !error && (
      <Wrapper>
        <h3>Popular Picks</h3>
        <Splide options={{
          perPage: 4,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "3rem",
        }}>
          {popular?.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Card>
                  <Link to={'/recipe/' + recipe.id}>
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
  min-height: 500px;
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
  color: #fff;
`

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
`

export default Popular