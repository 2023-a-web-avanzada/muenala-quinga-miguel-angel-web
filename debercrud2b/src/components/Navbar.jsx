import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
      <nav className='bg-gray-950 py-5 mb-2'>
          <div className='container flex justify-between px-10 md:px-0 mx-auto'>
              <Link href="/">
                  <h1 className='text-2xl font-bold'>Nnext Mongo</h1>
              </Link>
            <ul className="flex gap-x-4">
                <li className='flex justify-between'>
                    <Link className='w-300' href="/tasks/new">New Task</Link>
                </li>
            </ul>
          </div>
      </nav>
  )
}

export default Navbar