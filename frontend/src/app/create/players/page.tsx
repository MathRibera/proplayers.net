"use client";
import { useEffect, useState } from 'react';

export default function Home() {
  const DEFAULT_VALUE = {
    name: '',
    country: '',
    image: '',
    nick: '',
    role: '',
    teamId: '',
    age: '',
    auth: '',
    teams: []
  }
  const [form, setForm] = useState({
    ...DEFAULT_VALUE,
    success: false
  })

  useEffect(() => {
    const getTeams = async () => {
      const res = await fetch('http://localhost:3000/api/teams')
      const data = await res.json()
      setForm({...form, teams: data})
    }
    getTeams()
  }, [])

  const createPlayer = async (e: any) => {
    e.preventDefault()
    if (form.auth !== 'secret') return alert('Wrong auth')
    if (!form.name || !form.country || !form.image) return alert('Missing fields')
    await fetch('http://localhost:3000/api/create/player', {
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
        <h1>Create Players</h1>
        <form className="flex flex-col">
          <label
            htmlFor="name"
            className="mb-1 mt-2"
            >
            Name
            </label>
          <input
            type="number"
            id="name"
            name="name"
            value={form.name}
            className='rounded-lg mb-4 w-96 h-6'
            onChange={
              (e) => setForm({...form, name: e.target.value})
            }
          />
          <label
            htmlFor='age'
            className="mb-1 mt-2 border-t-2 border-black"
            >Age</label>
          <input
            type="text"
            id="age"
            name="age"
            value={form.age}
            className='mb-4 w-96 h-6 rounded-lg'
            onChange={
              (e) => setForm({...form, age: e.target.value})
            }
            />
          <label
            htmlFor="country"
            className="mt-2 mb-1 border-t-2 border-black"
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
            htmlFor="nick"
            className="mt-2 mb-1 border-t-2 border-black"
            >Nick</label>
          <input
            type="text"
            id="nick"
            name="nick"
            value={form.nick}
            className='mb-4 w-96 h-6 rounded-lg'
            onChange={
              (e) => setForm({...form, nick: e.target.value})
            }
            />
          <label
            htmlFor="role"
            className="mt-2 mb-1 border-t-2 border-black"
            >Role</label>
          <select
            id="role"
            name="role"
            value={form.role}
            className='mb-4 w-96 h-6 rounded-lg'
            onChange={
              (e) => setForm({...form, role: e.target.value})
            }
            >
            <option value=""></option>
            <option value="top">Top</option>
            <option value="jungle">Jungle</option>
            <option value="mid">Mid</option>
            <option value="adc">ADC</option>
            <option value="support">Support</option>
          </select>

          <label
            htmlFor="image"
            className="mb-1 mt-2 border-t-2 border-black"
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
            className="mb-1 mt-2 border-t-2 border-black"
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
            onClick={createPlayer}
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2'
          >Create</button>
        </form>
        {form.success && <p className="text-white text-center bg-green-500 w-full mt-2 text-white font-bold py-2 px-4 rounded">Team created</p>}
      </div>
    </main>
  )
}
