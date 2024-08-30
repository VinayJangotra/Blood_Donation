import React from 'react'
import Layout from '../components/shared/Layout/Layout'
import { useSelector } from 'react-redux'
import Spinner from '../components/Spinner';

const HomePage = () => {
  const {loading, error}= useSelector((state)=>state.auth);
  return (
    <Layout>
      {error && <span>{alert(error)}</span>}
      {loading ? (
       <Spinner/>
      ) : (
        <div>
          <h1>Home Page</h1>
        </div>
      )}
    </Layout>
  )
}

export default HomePage
