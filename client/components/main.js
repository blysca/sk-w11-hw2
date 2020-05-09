import React from 'react'
import { Link } from 'react-router-dom'
import Head from './head'
import Header from './header'

const DashboardMain = () => {
  return (
    <div>
      <Header />
      <Head title="DashboardMain" />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <h2>This is DashboardMain component</h2>
          <div id="title">Main</div>
          <hr className="my-4" />
          <br />
          <Link
            to="/dashboard/"
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow  mr-4"
          >
            Go To Root
          </Link>
          <Link
            to="/dashboard/profile/27840f1c-9944-4878-b29c-916305bfdcfb"
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow  mr-4"
          >
            Go To Profile
          </Link>
        </div>
      </div>
    </div>
  )
}

DashboardMain.propTypes = {}

export default DashboardMain
