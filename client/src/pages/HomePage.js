import React from 'react'
import Layout from '../components/shared/Layout/Layout'
import { useSelector } from 'react-redux'
import Spinner from '../components/Spinner';
import Modal from '../components/shared/modal/modal';

const HomePage = () => {
  const {loading, error}= useSelector((state)=>state.auth);
  return (
    <Layout>
      {error && <span>{alert(error)}</span>}
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <h4 className="ms-4" data-bs-toggle="modal" data-bs-target="#staticBackdrop" style={{cursor:"pointer"}}>
            <i className="fa-solid fa-plus text-success p-4" />
            Add Inventory
          </h4>
          <Modal/>
        </div>
      )}
    </Layout>
  );
}

export default HomePage
