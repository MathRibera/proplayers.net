import { Team } from '@/interfaces/Team';
import Head from 'next/head';
import Image from 'next/image';
import Script from 'next/script';

const getData = async () => {
  const data = await (await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}api/list/teams`)).json()

  return data
}

export default async function Home() {

  const teams: Team[] = await getData()

  return (
    <div>
      <Head>
        <title>ProPlayers.Net</title>
        <meta name="description" content="ProPlayers.Net" />
        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ID}`}
          strategy="lazyOnload"
          crossOrigin="anonymous">
        </Script>
      </Head>
      <div>
        <h1 className='text-center text-3xl mt-4'>ProPlayers.Net</h1>
        <div className='mt-4 w-3/4 m-auto'>
          <h2
            className='text-center text-2xl'
          >Teams</h2>
          <div className='flex gap-5 items-top flex-wrap'>
            <div className='w-52 mt-3 border border-black rounded-lg px-3 pb-3 h-fit'>
              <div className='pt-2 border-b-2 border-black'>
                <h3 className='text-center'>North America</h3>
              </div>
              <div className='mt-3'>
                {teams.filter((e: Team) => e.country === 'North America').map((team: Team) => (
                  <div key={team.id} className='flex'>
                    <span className='w-5 mr-3 flex justify-center items-center'>
                      <Image
                      src={team.image}
                      alt={team.name}
                      width={20}
                      height={20}
                      />
                    </span>
                    <p>{team.name}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className='w-52 mt-3 border border-black rounded-lg px-3 pb-3 h-fit'>
              <div className='pt-2 border-b-2 border-black'>
                <h3 className='text-center'>Brazil</h3>
              </div>
              <div className='mt-3'>
                {teams.filter((e: Team) => e.country === 'Brazil').map((team: Team) => (
                  <div key={team.id} className='flex'>
                    <span className='w-5 mr-3 flex justify-center items-center'>
                      <Image
                      src={team.image}
                      alt={team.name}
                      width={20}
                      height={20}
                      />
                    </span>
                    <p>{team.name}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className='w-52 mt-3 border border-black rounded-lg px-3 pb-3 h-fit'>
              <div className='pt-2 border-b-2 border-black'>
                <h3 className='text-center'>Europe</h3>
              </div>
              <div className='mt-3'>
                {teams.filter((e: Team) => e.country === 'Europe').map((team: Team) => (
                  <div key={team.id} className='flex'>
                    <span className='w-5 mr-3 flex justify-center items-center'>
                      <Image
                      src={team.image}
                      alt={team.name}
                      width={20}
                      height={20}
                      />
                    </span>
                    <p>{team.name}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className='w-52 mt-3 border border-black rounded-lg px-3 pb-3 h-fit'>
              <div className='pt-2 border-b-2 border-black'>
                <h3 className='text-center'>Korea</h3>
              </div>
              <div className='mt-3'>
                {teams.filter((e: Team) => e.country === 'Korea').map((team: Team) => (
                  <div key={team.id} className='flex'>
                    <span className='w-5 mr-3 flex justify-center items-center'>
                      <Image
                      src={team.image}
                      alt={team.name}
                      width={20}
                      height={20}
                      />
                    </span>
                    <p>{team.name}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className='w-52 mt-3 border border-black rounded-lg px-3 pb-3 h-fit'>
            <div className='pt-2 border-b-2 border-black'>
                <h3 className='text-center'>Latin America</h3>
              </div>
              <div className='mt-3'>
                {teams.filter((e: Team) => e.country === 'Latin America').map((team: Team) => (
                  <div key={team.id} className='flex'>
                    <span className='w-5 mr-3 flex justify-center items-center'>
                      <Image
                      src={team.image}
                      alt={team.name}
                      width={20}
                      height={20}
                      />
                    </span>
                    <p>{team.name}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className='w-52 mt-3 border border-black rounded-lg px-3 pb-3 h-fit'>
              <div className='pt-2 border-b-2 border-black'>
                <h3 className='text-center'>Asia Pacific</h3>
              </div>
              <div className='mt-3'>
                {teams.filter((e: Team) => e.country === 'Asia Pacific').map((team: Team) => (
                  <div key={team.id} className='flex'>
                    <span className='w-5 mr-3 flex justify-center items-center'>
                      <Image
                      src={team.image}
                      alt={team.name}
                      width={20}
                      height={20}
                      />
                    </span>
                    <p>{team.name}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className='w-52 mt-3 border border-black rounded-lg px-3 pb-3 h-fit'>
              <div className='pt-2 border-b-2 border-black'>
                <h3 className='text-center'>China</h3>
              </div>
              <div className='mt-3'>
                {teams.filter((e: Team) => e.country === 'China').map((team: Team) => (
                  <div key={team.id} className='flex'>
                    <span className='w-5 mr-3 flex justify-center items-center'>
                      <Image
                      src={team.image}
                      alt={team.name}
                      width={20}
                      height={20}
                      />
                    </span>
                    <p>{team.name}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className='w-52 mt-3 border border-black rounded-lg px-3 pb-3 h-fit'>
              <div className='pt-2 border-b-2 border-black'>
                <h3 className='text-center'>Vietnam</h3>
              </div>
              <div className='mt-3'>
                {teams.filter((e: Team) => e.country === 'Vietnam').map((team: Team) => (
                  <div key={team.id} className='flex'>
                    <span className='w-5 mr-3 flex justify-center items-center'>
                      <Image
                      src={team.image}
                      alt={team.name}
                      width={20}
                      height={20}
                      />
                    </span>
                    <p>{team.name}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className='w-52 mt-3 border border-black rounded-lg px-3 pb-3 h-fit'>
              <div className='pt-2 border-b-2 border-black'>
                <h3 className='text-center'>Oceania</h3>
              </div>
              <div className='mt-3'>
                {teams.filter((e: Team) => e.country === 'Oceania').map((team: Team) => (
                  <div key={team.id} className='flex'>
                    <span className='w-5 mr-3 flex justify-center items-center'>
                      <Image
                      src={team.image}
                      alt={team.name}
                      width={20}
                      height={20}
                      />
                    </span>
                    <p>{team.name}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className='w-52 mt-3 border border-black rounded-lg px-3 pb-3 h-fit'>
              <div className='pt-2 border-b-2 border-black'>
                <h3 className='text-center'>Japan</h3>
              </div>
              <div className='mt-3'>
                {teams.filter((e: Team) => e.country === 'Japan').map((team: Team) => (
                  <div key={team.id} className='flex'>
                    <span className='w-5 mr-3 flex justify-center items-center'>
                      <Image
                      src={team.image}
                      alt={team.name}
                      width={20}
                      height={20}
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
      <div className='mt-4 w-3/4 m-auto'>
        <h2
          className='text-center text-2xl'
        >Best Pro Players</h2>
      sp</div>
    </div>
  )
}
