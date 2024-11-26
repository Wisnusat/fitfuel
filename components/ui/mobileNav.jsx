import React from 'react'
import { X } from 'lucide-react'

export function MobileNav({ isOpen, setIsOpen }) {
  if (!isOpen) return null
  return (
    <div
      className={`fixed inset-0 bg-white z-50 transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } transition-transform duration-300 ease-in-out`}
    >
      <div className="flex justify-end p-4">
        <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-700">
          <X size={24} />
        </button>
      </div>
      <nav className="flex flex-col items-center">
        <a href="#" className="text-lg py-4 hover:text-green-500">Home</a>
        <a href="#" className="text-lg py-4 hover:text-green-500">Food Calculator</a>
        <a href="#" className="text-lg py-4 hover:text-green-500">My Diet</a>
      </nav>
    </div>
  )
}

