// components/Modal.js
import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#__next');

const WeatherModal = ({ isOpen, onClose, handleSubmit, setCity }) => {
  const handleModal = () => {
    onClose(false);
  }

  return (
    <Modal isOpen={isOpen} >
      <button onClick={handleModal} className='absolute top-5 right-5 font-bold '>X</button>
      <h2>Enter Your City Name</h2>
      <form class="max-w-md mx-auto">
        <div class="mb-5 w-[22rem]">
          <input onChange={(e) => setCity(e.target.value)} type="text" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={handleSubmit}>
          Submit
        </button>
      </form>

    </Modal>
  );
};

export default WeatherModal;
