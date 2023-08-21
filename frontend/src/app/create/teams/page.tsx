"use client";
import { use, useEffect, useState } from 'react';

export default function Home() {
  const DEFAULT_VALUE = {
    name: '',
    country: '',
    image: '',
    auth: '',
  }
  const [form, setForm] = useState({
    ...DEFAULT_VALUE,
    success: false
  })

  useEffect(() => {
    console.log(process.env)
  }, [])

  const createTeam = async (e: any) => {
    e.preventDefault()
    console.log(process.env)
    if (form.auth !== 'secret') return alert('Wrong auth')
    if (!form.name || !form.country || !form.image) return alert('Missing fields')
    await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}api/create/team`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form)
    })
    setForm({...DEFAULT_VALUE, success: true })
    setTimeout(() => {
      setForm({...DEFAULT_VALUE, success: false})
    }, 2000)
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
            className='rounded-lg mb-4 w-96 h-6'
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
            className='mb-4 w-96 h-6 rounded-lg'
            onChange={
              (e) => setForm({...form, country: e.target.value})
            }
            />
          <label
            htmlFor="image"
            className="mb-2 mt-2 border-t-2 border-black"
            >Logo team URL</label>
          <textarea
            id="image"
            name="image"
            value={form.image}
            className='mb-4 w-96 h-20 rounded-lg'
            onChange={
              (e) => setForm({...form, image: e.target.value})
            }
            />
          <label
            htmlFor="auth"
            className="mb-2 mt-2 border-t-2 border-black"
            >Auth</label>
          <input
            type="text"
            id="auth"
            name="auth"
            value={form.auth}
            onChange={
              (e) => setForm({...form, auth: e.target.value})
            }
            />
          <button
            type="submit"
            onClick={createTeam}
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-1'
          >Create</button>
        </form>
        {form.success && <p className="text-white text-center bg-green-500 w-full mt-1 text-white font-bold py-2 px-4 rounded">Team created</p>}
      </div>
    </main>
  )
}
