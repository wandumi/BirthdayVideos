import './App.css'
import { FaBars, IconName } from 'react-icons/fa'

function App() {
  return (
    <div className='h-screen mx-auto bg-gray-100'>
      <div className='flex justify-between align-center bg-black px-5 py-5 text-white'>
        <div>
          <h2>Birthday Remainder</h2>
        </div>
        <div className='flex align-center'>
          <div className='px-2 hover:rounded-sm hover:cursor-pointer hover:bg-white hover:text-black'>
            Add
          </div>
          <div className='px-2 hover:rounded-sm hover:cursor-pointer hover:bg-white hover:text-black'>
            Profile
          </div>
        </div>
      </div>
      <div className='rounded-lg shadow bg-gray-100 drawer h-screen'>
        <input id='my-drawer-3' type='checkbox' className='drawer-toggle' />
        <div className='flex flex-col drawer-content'>
          <div className='w-full navbar bg-black text-white'>
            <div className='flex-none lg:hidden'>
              <label htmlFor='my-drawer-3' className='btn btn-square btn-ghost'>
                <span>
                  <FaBars size='2em' />
                </span>
              </label>
            </div>
            <div className='flex-1 px-2 mx-2'>
              <span>Birthday Reminder</span>
            </div>
            <div className='flex-none hidden lg:block'>
              <ul className='menu horizontal'>
                <li>
                  <a className='rounded-btn'>Home</a>
                </li>
                <li>
                  <a className='rounded-btn'>Profile</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='drawer-side'>
          <label htmlFor='my-drawer-3' className='drawer-overlay'></label>
          <ul className='p-4 overflow-y-auto menu w-80 bg-base-100'>
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
