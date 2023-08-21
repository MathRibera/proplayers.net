"use client";
import Image from 'next/image'
import { useState } from 'react';

export default function Home() {
  const [form, setForm] = useState({
    name: '',
    country: '',
    image: '',
    auth: 'secret'
  })

  const createTeam = async (e: any) => {
    e.preventDefault()
    const res = await fetch('http://localhost:3000/api/create/team', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form)
    })
    const data = await res.json()
    console.log(data)
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-slate-400">
      <div className="flex flex-col items-center border-2 border-black p-2 rounded-lg">
        <h1>Create Teams</h1>
        <form className="flex flex-col">
          <label
            htmlFor="name"
            className="mb-2 mt-4"
            >
            Name
            </label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={
              (e) => setForm({...form, name: e.target.value})
            }
          />
          <label
            htmlFor="country"
            className="mt-2 mb-2 border-t-2 border-black"
            >Country</label>
          <input
            type="text"
            id="country"
            name="country"
            value={form.country}
            onChange={
              (e) => setForm({...form, country: e.target.value})
            }
            />
          <label
            htmlFor="image"
            className="mb-2 mt-2 border-t-2 border-black"
            >Logo team URL</label>
          <input
            type="text"
            id="image"
            name="image"
            value={form.image}
            className='mb-4 w-96 h-20'
            onChange={
              (e) => setForm({...form, image: e.target.value})
            }
            />
          <button
            type="submit"
            onClick={createTeam}
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
          >Create</button>
        </form>
      </div>
    </main>
  )
}
