"use client";

import { Team } from '@/interfaces/Team';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Home() {
  const [info, setInfo] = useState({
    teams: [],
    loading: true
  })
  useEffect(() => {
    const batata = async () => {
      const data = await (await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL_DEV}api/list/teams`)).json()
      setInfo({
        teams: data,
        loading: false
      })
    }
    batata()
    console.log(info.teams)
  }, []);

  return (
    <>
    {info.loading ? <p>Loading...</p> :
    <div>
      <h1 className='text-center text-3xl mt-4'>ProPlayers.Net</h1>
      <div className='mt-4 w-4/6 m-auto'>
        <h2
          className='text-center text-2xl'
        >Teams</h2>
        <div className='flex flex-row justify-center items-center flex-wrap gap-4'>
          <div className='w-52'>
            <h3 className='text-center'>North America</h3>
            <div className='mt-3'>
              {info.teams.filter((e: Team) => e.country === 'North America').map((team: Team) => (
                <div key={team.id} className='flex'>
                  <span className='w-10 mr-3'>
                    <Image
                    src={team.image}
                    alt={team.name}
                    width={40}
                    height={40}
                    />
                  </span>
                  <p>{team.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div className='w-52'>
            <h3 className='text-center'>Brazil</h3>
            <div className='mt-3'>
              {info.teams.filter((e: Team) => e.country === 'Brazil').map((team: Team) => (
                <div key={team.id} className='flex'>
                  <span className='w-10 mr-3'>
                    <Image
                    src={team.image}
                    alt={team.name}
                    width={40}
                    height={40}
                    />
                  </span>
                  <p>{team.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div className='w-52'>
            <h3 className='text-center'>Europe</h3>
            <div className='mt-3'>
              {info.teams.filter((e: Team) => e.country === 'Europe').map((team: Team) => (
                <div key={team.id} className='flex'>
                  <span className='w-10 mr-3'>
                    <Image
                    src={team.image}
                    alt={team.name}
                    width={40}
                    height={40}
                    />
                  </span>
                  <p>{team.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div className='w-52'>
            <h3 className='text-center'>Korea</h3>
            <div className='mt-3'>
              {info.teams.filter((e: Team) => e.country === 'Korea').map((team: Team) => (
                <div key={team.id} className='flex'>
                  <span className='w-10 mr-3'>
                    <Image
                    src={team.image}
                    alt={team.name}
                    width={40}
                    height={40}
                    />
                  </span>
                  <p>{team.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div className='w-52'>
            <h3 className='text-center'>China</h3>
            <div className='mt-3'>
              {info.teams.filter((e: Team) => e.country === 'China').map((team: Team) => (
                <div key={team.id} className='flex'>
                  <span className='w-10 mr-3'>
                    <Image
                    src={team.image}
                    alt={team.name}
                    width={40}
                    height={40}
                    />
                  </span>
                  <p>{team.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div className='w-52'>
            <h3 className='text-center'>Asia Pacific</h3>
            <div className='mt-3'>
              {info.teams.filter((e: Team) => e.country === 'Asia Pacific').map((team: Team) => (
                <div key={team.id} className='flex'>
                  <span className='w-10 mr-3'>
                    <Image
                    src={team.image}
                    alt={team.name}
                    width={40}
                    height={40}
                    />
                  </span>
                  <p>{team.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div className='w-52'>
            <h3 className='text-center'>Vietnam</h3>
            <div className='mt-3'>
              {info.teams.filter((e: Team) => e.country === 'Vietnam').map((team: Team) => (
                <div key={team.id} className='flex'>
                  <span className='w-10 mr-3'>
                    <Image
                    src={team.image}
                    alt={team.name}
                    width={40}
                    height={40}
                    />
                  </span>
                  <p>{team.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div className='w-52'>
            <h3 className='text-center'>Oceania</h3>
            <div className='mt-3'>
              {info.teams.filter((e: Team) => e.country === 'Oceania').map((team: Team) => (
                <div key={team.id} className='flex'>
                  <span className='w-10 mr-3'>
                    <Image
                    src={team.image}
                    alt={team.name}
                    width={40}
                    height={40}
                    />
                  </span>
                  <p>{team.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className='text-center'>Japan</h3>
            <div className='mt-3'>
              {info.teams.filter((e: Team) => e.country === 'Japan').map((team: Team) => (
                <div key={team.id} className='flex'>
                  <span className='w-10 mr-3'>
                    <Image
                    src={team.image}
                    alt={team.name}
                    width={40}
                    height={40}
                    />
                  </span>
                  <p>{team.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    }
    </>
  )
}
