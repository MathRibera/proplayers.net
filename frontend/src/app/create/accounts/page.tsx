"use client";
import { Summoner } from '@/interfaces/SummonerJson';
import { useEffect, useState } from 'react';

export default function Home() {
  const DEFAULT_VALUE = {
    auth: '',
    nickName: '',
    server: '',
    region: '',
    proId: '',
    puuid: '',
  }
  const [form, setForm] = useState({
    ...DEFAULT_VALUE,
    success: false
  })

  useEffect(() => {
  }, [])

  const createPlayer = async (e: any) => {
    e.preventDefault()
    if (form.auth !== 'secret') return alert('Wrong auth')
  }
  return (
    <div>
      <head>
      <title>Register Accounts</title>
      <meta name="description" content="ProPlayers.Net" />
    </head>
      <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-slate-400">
        <div className="flex flex-col items-center border-2 border-black p-2 rounded-lg">
          <h1>Register Accounts</h1>
          <form className="flex flex-col">
            <label
              htmlFor="name"
              className="mb-2 mt-4"
              >
              nickName
              </label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.nickName}
              className='rounded-lg mb-4 w-96 h-6'
              onChange={
                (e) => setForm({...form, nickName: e.target.value})
              }
            />
            <label
              htmlFor="Server"
              className="mt-2 mb-2 border-t-2 border-black"
              >Server</label>
            <select
              className='mb-4 w-96 h-6 rounded-lg'
              onChange={(e) => setForm({...form, server: e.target.value})}
            >
              <option value="North America">North America</option>
              <option value="Brazil">Brazil</option>
              <option value="Europe">Europe</option>
              <option value="Korea">Korea</option>
              <option value="China">China</option>
              <option value="Asia Pacific">Asia Pacific</option>
              <option value="Vietnam">Vietnam</option>
              <option value="Japan">Japan</option>
              <option value="Latin America">Latin America</option>
              <option value="Oceania">Oceania</option>
            </select>
            <label
              htmlFor="region"
              className="mb-2 mt-2 border-t-2 border-black"
              >Region</label>
            <select
              className='mb-4 w-96 h-6 rounded-lg'
              onChange={async (e) => {
                setForm({...form, region: e.target.value})
              const puuid: Summoner = await (await fetch(`https://${form.region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${encodeURI(form.nickName)}?api_key=${process.env.NEXT_PUBLIC_API_TOKEN}`)).json()
              console.log(puuid)
              setForm({...form, puuid: puuid.puuid})
              }
            }
            >
              <option value=""></option>
              <option value="br1">BR1</option>
              <option value="eun1">EUN1</option>
              <option value="euw1">EUW1</option>
              <option value="jp1">JP1</option>
              <option value="kr">KR</option>
              <option value="la1">LA1</option>
              <option value="la2">LA2</option>
              <option value="na1">NA1</option>
              <option value="oc1">OC1</option>
              <option value="ph2">PH2</option>
              <option value="ru">RU</option>
              <option value="sg2">SG2</option>
              <option value="th2">TH2</option>
              <option value="tr1">TR1</option>
              <option value="tw2">TW2</option>
              <option value="vn2">VN2</option>
            </select>
            <label
              htmlFor="proId"
              className="mb-2 mt-2 border-t-2 border-black"
              >ProId</label>
            <input
              type="text"
              id="proId"
              name="proId"
              value={form.proId}
              onChange={
                async (e) => setForm({...form, proId: e.target.value})
              }
              />
            <label
              htmlFor="puuid"
              className="mb-2 mt-2 border-t-2 border-black"
              >Puuid</label>
            <input
              type="text"
              id="puuid"
              name="puuid"
              value={form.puuid}
              onChange={
                (e) => setForm({...form, puuid: e.target.value})
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
                  async (e) => setForm({...form, auth: e.target.value})
                }
                />
            <button
              type="submit"
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-1'
            >Create</button>
          </form>
          {form.success && <p className="text-white text-center bg-green-500 w-full mt-1 text-white font-bold py-2 px-4 rounded">Team created</p>}
          </div>
      </main>
    </div>
  )
}
