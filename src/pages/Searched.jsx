import React, {useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import styled from 'styled-components'
import Error from '../components/Error'
import Loader from '../components/Loader'

const Searched = () => {
  const [searchedRecipes, setSearchedRecipes] = useState();
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState(false)

  let params = useParams();

  const getSearched = async (name) => {
    const apiSearch = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`)
    .then((data) => {
      const searcherResults = data.json()
      setSearchedRecipes(searcherResults.results)
    })
    .catch((err) => setError(true))
    setIsLoaded(true)
  };


  useEffect(() => {
    getSearched(params.search)
  }, [params.search])

  return (
    <>
    {isLoaded && !error && (
      <Grid>
        {
          searchedRecipes?.map((item) => {
            return (
              <Card key={item.id}>
                <Link to={'/recipe/' + item.id}>
                  <img src={item.image} alt="" />
                  <h4>{item.title}</h4>
                </Link>
              </Card>
            )
          })
        }
      </Grid>
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

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`

const WrapperLoader = styled.div`
  min-height: 500px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Card = styled.div`
  img {
    width: 100%;
    max-width: 400px;
    border-radius: 2rem;
  }

  a {
    text-decoration: none;
  }

  h4 {
    text-align: center;

  }
`

export default Searched