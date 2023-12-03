import React from 'react';
import person from './assets/people.png'

const App = () => {
  return (
    <div className=' h-screen w-screen'>
      <div className='flex'>
        <div className='flex-[29%] bg-[#776B5D] h-screen rounded-e overflow-hidden z-2'>
          <h1 className='mt-[25%] ml-[5rem] text-4xl font-semibold'>Employee Management System</h1>
        </div>

        <div className='flex-[73%] h-screen bg-[#DED0B6] items-center justify-center overflow-hidden z-1'>

          <img src={person} alt="" className=' mx-auto mt-[5%] mb-8 h-[8rem]'/>

          <div className="mx-auto bg-[#EBE3D5] p-4 rounded-lg h-[22rem] w-[24rem] mt-auto shadow-gray-600 shadow-md flex flex-col justify-between mb-8 border-black">

              <h1 className='text-center text-3xl font-semibold mt-2'>LOGIN</h1>

              <form action="" method='POST'>
                  <div className='mb-5 mt-6'>
                      <label htmlFor="username">Username:</label>
                      <input
                        type="text"
                        className='w-full px-3 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring focus:border-blue-900'
                        id='username'
                        name='username'
                        required
                      />
                  </div>
                  <div className='mt-5 mb-3'>
                      <label htmlFor="password">Password:</label>
                      <input
                        type="password"
                        className='w-full px-3 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring focus:border-blue-900'
                        id='password'
                        name='password'
                        required
                      />
                  </div>
                  <div className='flex justify-center mb-2'>
                    <a href="">forgot password ?</a>
                  </div>
              </form>
            <div className=' flex justify-center'>
            <button type='submit' className='relative rounded-md flex h-[50px] w-40 items-center justify-center overflow-hidden bg-[#B0A695] text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#FAE7C9] before:duration-500 before:ease-out hover:shadow-[#BBAB8C] hover:before:h-56 hover:before:w-56 hover:text-black'>
            <span className="relative z-10">LOGIN</span>
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
