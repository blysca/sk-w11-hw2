import React from 'react'
import { Link } from 'react-router-dom'

import Head from './head'

const Dummy = () => {
  return (
    <div>
      <Head title="Hello" />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          This is dummy component
          <Link
            to="/dashboard/"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Go To Dashboard
          </Link>
        </div>
      </div>
    </div>
  )
}

Dummy.propTypes = {}

export default Dummy
