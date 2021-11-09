import Head from 'next/head'
import Link from 'next/link'
import Banner from '../components/Banner'
import {
  ViewListIcon,
  XIcon
} from "@heroicons/react/outline"
import { useState, useRef, useEffect } from 'react'
import InfoFeedModule from '../components/InfoFeedModule'
import ShowcaseBanner from '../components/ShowcaseBanner'
import MotionBackgroundMenu from '../components/MotionBackgroundMenu'
import Header from '../components/Header'
import About from '../components/About'
import Contact from '../components/Contact'


export default function Home() {
  const [stateProject, setStateProject] = useState(false)
  const homeRef = useRef()
  const aboutRef = useRef()
  const contactRef = useRef()
  // Not excactly how its done so needs more research
  // const allRef = useEffect({
  //   aboutRef:aboutRef,
  //   contactRef: contactRef
  // },[])

  function toggleOpen(bool) {
    setStateProject(bool)
  }
  // https://robinvdvleuten.nl/blog/scroll-a-react-component-into-view/
  //  implement scroll in html, vanilla js and react functional component
  function scroll(yPos) {
    //Scrolling the document to position "250" 
    //horizontally and "110" vertically
    console.log("yPos: ",yPos)
    console.log(aboutRef)
    window.scrollTo(0, yPos);

}
function handleClickScroll(reference) {
  reference.current.scrollIntoView({ behavior: 'smooth'})
}
  return (
    <div className="relative min-h-full flex justify-center h-auto overflow-x-hidden overflow-y-auto scrollbar-hide">
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
        <About aboutRef={aboutRef} scrollFunc={handleClickScroll}/>
        <Contact contactRef={contactRef} scrollFunc={handleClickScroll}/>
      </div>
      {/* <Banner /> */}

      {/* Feed */}
      
      <div className="relative p-10 text-2xl font-bold w-3/4 max-w-screen-md top-14">
        
        <div className="absolute lg:left-0 lg:right-0">
          <MotionBackgroundMenu />
        </div>


        <div className="absolute left-0 right-0">
          <InfoFeedModule />
        </div>
        
      </div>
      
      <div className={`fixed inset-x-0 bottom-16 py-4 h-96 bg-gray-400 bg-opacity-10 fadeOut 5s ease-in-out ${stateProject? '': 'hidden'}`} >
        <ShowcaseBanner />
        <div className="absolute h-11 w-11 top-6 right-6 opacity-30">
          <button className="hover:scale-125" onClick={() => toggleOpen(!stateProject)}> 
            CLOSE
            <XIcon />
          </button>
         
        </div>

      </div>
      <div className="fixed top-0 right-0">
        <Header homeRef={homeRef} aboutRef={aboutRef} contactRef={contactRef} scroll={handleClickScroll} stateProject={stateProject} setStateProject={setStateProject}/>
      </div>
     
    </div>
  )
}
