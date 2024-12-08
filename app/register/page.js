'use client'

import React, { useState } from 'react'
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Menu } from 'lucide-react'
import { MobileNav } from '@/components/ui/mobileNav'

export default function Register() {
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-2">
          <Image src="/images/logo.svg" width={40} height={40} alt="logo" />
          <span className="font-semibold">FitFuel</span>
        </div>
        <div className="hidden md:flex gap-6">
          <a href="#" className="text-sm hover:text-green-500">Home</a>
          <a href="#" className="text-sm hover:text-green-500">Food Calculator</a>
          <a href="#" className="text-sm hover:text-green-500">My Diet</a>
        </div>
        <button className="md:hidden" onClick={() => setIsNavOpen(true)}>
          <Menu size={24} />
        </button>
      </nav>

      <MobileNav isOpen={isNavOpen} setIsOpen={setIsNavOpen} />

      {/* Hero Section */}
      <section className="bg-green-400 text-center py-12">
        <h1 className="text-3xl font-bold mb-2">Join <span className="text-[#169F04]">FitFuel</span> Today!</h1>
        <p className="text-gray-800 mb-6">Create your account to start tracking your daily calorie intake.</p>
        <Input
          type="email"
          placeholder="Email"
          className="max-w-xs mx-auto mb-4 bg-white"
        />
        <Button className="bg-black hover:bg-black/90">Sign Up</Button>
      </section>

      {/* Main Content */}
      <div className="flex-1 grid md:grid-cols-2">
        {/* Left Side - Image */}
        <div className="relative h-[400px] md:h-full">
          <Image
            src="/images/register_illustration.svg"
            alt="Healthy Food Plate"
            fill
            className="object-cover"
          />
        </div>

        {/* Right Side - Register Form */}
        <div className="p-8 flex flex-col justify-center max-w-md mx-auto w-full">
          <h2 className="text-2xl font-bold mb-6">Register</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Username</label>
              <Input type="text" placeholder="Enter your username" />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <Input type="password" placeholder="Enter your password" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Confirm Password</label>
              <Input type="password" placeholder="Confirm your password" />
            </div>

            <Button className="w-full bg-black hover:bg-black/90">
              Sign Up
            </Button>
          </form>
        </div>
      </div>

      {/* Welcome Section */}
      <section className="bg-green-400 py-12">
        <div className="container mx-auto md:px-12 flex items-center md:justify-start justify-center md:flex-row flex-col gap-6">
          <div className="bg-[#D9D9D9] rounded-full p-4">
            <Image src="/images/person.svg" width={80} height={80} alt="logo" />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2 flex md:justify-start justify-center">Welcome to FitFuel!</h2>
            <div className="flex gap-2 mb-2 md:justify-start justify-center">
              <span className="text-sm bg-[#D9D9D9] px-2 py-1 rounded">Healthy Living</span>
              <span className="text-sm bg-[#D9D9D9] px-2 py-1 rounded">Fitness Goals</span>
            </div>
            <p className="text-gray-800 flex md:justify-start justify-center">Start your journey to a healthier you.</p>
          </div>
        </div>
      </section>

      {/* Sign In Section */}
      <section className="py-12 text-center">
        <h2 className="text-2xl font-bold mb-1">Already have an account?</h2>
        <p className="text-2xl font-bold mb-4">Sign here!</p>
        <Button variant="outline" className="bg-black text-white hover:bg-black/90">
          Sign in
        </Button>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-6">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <p className="text-sm">© 2024 FitFuel. Seluruh hak cipta dilindungi undang-undang.</p>
          <div className="flex items-center gap-2">
            <span className="text-sm md:flex hidden">Indonesia</span>
            <Image
              src="/images/indonesia.svg"
              alt="Indonesia flag"
              width={50}
              height={50}
            />
          </div>
        </div>
      </footer>
    </div>
  )
}

