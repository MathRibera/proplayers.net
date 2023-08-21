"use client";
import Image from 'next/image'
import { useState } from 'react';

export default function Home() {
  const [form, setForm] = useState({
    name: '',
    country: '',
    image: ''
  })

  const createTeam = async (e: any) => {
    e.preventDefault()
    const res = await fetch('http://localhost:3000/api/teams', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    })
    const data = await res.json()
    console.log(data)
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center">
        <h1>Create Teams</h1>
        <form className="flex flex-col">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={
              (e) => setForm({...form, name: e.target.value})
            }
          />
          <label htmlFor="country">Country</label>
          <input
            type="text"
            id="country"
            name="country"
            value={form.country}
            onChange={
              (e) => setForm({...form, country: e.target.value})
            }
            />
          <label htmlFor="image">Logo team URL</label>
          <input
            type="text"
            id="image"
            name="image"
            value={form.image}
            onChange={
              (e) => setForm({...form, image: e.target.value})
            }
            />
          <button
            type="submit"
            onClick={createTeam}
          >Create</button>
        </form>
      </div>
    </main>
  )
}
