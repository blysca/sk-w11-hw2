import React from 'react'
import { Link } from 'react-router-dom'
import Header from './header'

const Home = () => {
  return (
    <div>
      <Header />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <h2>This is Dashboard component</h2>
          <div id="title">Dashboard</div>
          <hr className="my-4" />
          <br />
          <Link
            to="/dashboard/main"
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mr-4"
          >
            Go To Main
          </Link>
          <Link
            to="/dashboard/profile/27840f1c-9944-4878-b29c-916305bfdcfb"
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mr-4"
          >
            Go To Profile
          </Link>
        </div>
      </div>
    </div>
  )
}

Home.propTypes = {}

export default React.memo(Home)
