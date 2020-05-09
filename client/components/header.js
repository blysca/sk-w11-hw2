import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [toggled, toggle] = useState(false)

  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <svg
          className="fill-current h-8 w-8 mr-2"
          width="54"
          height="54"
          viewBox="0 0 54 54"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
        </svg>
        <button
          type="button"
          id="toggle-button"
          className="font-semibold text-xl tracking-tight"
          onClick={() => toggle(!toggled)}
        >
          Tailwind CSS
        </button>
      </div>
      <div className="text-sm lg:flex-grow">
        <Link
          to="/dashboard/"
          className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
        >
          Go To Root
        </Link>
        <Link
          to="/dashboard/main"
          className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
        >
          Go To Main
        </Link>
        <Link
          to="/dashboard/profile/27840f1c-9944-4878-b29c-916305bfdcfb"
          className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
        >
          Go To Profile
        </Link>
      </div>

      {toggled && (
        <div id="menu" className="block">
          <a
            href="https://www.google.com/"
            type="button"
            className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </a>
        </div>
      )}
    </nav>
  )
}

export default React.memo(Header)
