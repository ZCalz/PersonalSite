import Head from 'next/head'
import Link from 'next/link'
import Banner from '../components/Banner'
import {
  ViewListIcon,
  XIcon
} from "@heroicons/react/outline"
import { useState } from 'react'
import InfoFeedModule from '../components/InfoFeedModule'
import ShowcaseBanner from '../components/ShowcaseBanner'
import MotionBackgroundMenu from '../components/MotionBackgroundMenu'
import Header from '../components/Header'


export default function Home() {
  const [stateProject, setStateProject] = useState(false)

  function toggleOpen(bool) {
    setStateProject(bool)
  }
  console.log(stateProject)
  return (
    <div className="relative min-h-full flex justify-center h-auto overflow-x-hidden overflow-y-hidden">
      <Head>
        <title>Portfolio App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* mobile bar   */}
      {/* <div className="bg-gray-800 text-gray-100 flex justify-between md:hidden">
        <a className="block p-4 text-white font-bold">Better Dev</a>
          <button className="p-4 hover:translate-x-2" onClick={() => toggleOpen(!state)}> 
            more
            <ViewListIcon className="h-5 w-5" />
          </button>
      </div> */}
    
      <div className="px-10 w-auto h-screen">
        <Banner />
      </div>
      {/* <Banner /> */}

      {/* Feed */}
      <div className="absolute top-0 right-0">
        <Header stateProject={stateProject} setStateProject={setStateProject}/>
      </div>
      <div className="relative p-10 text-2xl font-bold w-3/4 max-w-screen-md top-14">
        
        <div className="absolute lg:left-0 lg:right-0">
          <MotionBackgroundMenu />
        </div>


        <div className="absolute left-0 right-0">
          <InfoFeedModule />
        </div>
        
      </div>
      
      <div className={`fixed inset-x-0 bottom-16 py-4 h-96 bg-gray-400 bg-opacity-10 ${stateProject? '': 'hidden'}`} >
        <ShowcaseBanner />
        <div className="absolute h-11 w-11 top-6 right-6 opacity-30">
          <button className="hover:scale-125" onClick={() => toggleOpen(!stateProject)}> 
            CLOSE
            <XIcon />
          </button>
         
        </div>

      </div>
     
    </div>
  )
}
