"use client";
import { Summoner } from '@/interfaces/SummonerJson';
import { useEffect, useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const DEFAULT_VALUE = {
    nickName: '',
    proId: '',
    puuid: '',
    enable: false,
  }
  const [form, setForm] = useState({
    auth: '',
    nickName: '',
    server: '',
    region: '',
    proId: '',
    puuid: '',
    players: [],
    enable: false,
    success: false
  })

  useEffect(() => {
    const getData = async () => {
      const proPlayers = await (await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}api/list/players`)).json()
      setForm({...form, players: proPlayers})
    }
    getData()
  }, [])

  const fetchSummonerData = async (url:string) => {
    try {
      const puuid: Summoner = await (await fetch(url)).json()
      setForm({...form, puuid: puuid.puuid, enable: true})
    } catch (e) {
      alert('Summoner not found or invalid region, change it and try again')
      setForm({...form, enable: false})
    }
  }

  const createAccount = async (e: any) => {
    e.preventDefault()
    if (form.auth !== 'secret') return alert('Wrong auth')
    if (form.puuid === '') return alert('Summoner not found or invalid region, change it and try again')
    if (form.proId === '') return alert('Select a pro player')
    if (form.server === '') return alert('Select a server')
    if (form.nickName === '') return alert('Enter a nickname')
    const existsAccount = await (await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}api/get/player/id=${form.proId}&nick=${form.nickName}`)).json()
    if (existsAccount.error) return alert('This player already has an account')
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}api/create/account`
    const data = {
      nickName: form.nickName,
      server: form.server,
      region: form.region,
      puuid: form.puuid,
      proId: form.proId,
      auth: form.auth,
    }
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    setTimeout(() => {
      setForm({...form, ...DEFAULT_VALUE, success: false})
    }, 500)
  }
  return (
    <div>
      <Head>
        <title>Register Accounts</title>
        <meta name="description" content="ProPlayers.Net" />
      </Head>
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
              onChange={(e) => {
                const url = `https://${e.target.value}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${encodeURI(form.nickName)}?api_key=${process.env.NEXT_PUBLIC_API_TOKEN}`
                fetchSummonerData(url)
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
            <select
              className='mb-4 w-96 h-6 rounded-lg'
              onChange={(e) => setForm({...form, proId: e.target.value})}
            >
              <option value=""></option>
              {form.players.map((player: any) => (
                <option key={player.id} value={player.id}>{player.name} - {player.team.name}</option>
              ))}
            </select>
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
              disabled={!form.enable}
              onClick={createAccount}
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-1'
            >Create</button>
          </form>
          {form.success && <p className="text-white text-center bg-green-500 w-full mt-1 text-white font-bold py-2 px-4 rounded">Account created</p>}
          </div>
      </main>
    </div>
  )
}
