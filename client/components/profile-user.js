import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Head from './head'
import Header from './header'

const DashboardProfileUser = () => {
  const { user } = useParams()

  return (
    <div>
      <Header />
      <Head title="DashboardProfileUser" />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <h2>This is DashboardProfileUser component</h2>
          <div id="title">Profile</div>
          <div id="username">{user}</div>
          <hr className="my-4" />
          <br />
          <Link
            to="/dashboard/"
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mr-4"
          >
            Go To Root
          </Link>
          <Link
            to="/dashboard/main"
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mr-4"
          >
            Go To Main
          </Link>
        </div>
      </div>
    </div>
  )
}

DashboardProfileUser.propTypes = {}

export default DashboardProfileUser
