import {UserIcon} from "@heroicons/react/outline"
import Stats from "./Stats"
import { useState } from "react"
import Skill from "./Skill"

function Banner() {
    const [statVisibility, setStatVisibility] = useState(true)
    const [skillVisibility, setSkillVisibility] = useState(false)
    function statTrue(data) {
        setStatVisibility(data)
        setSkillVisibility(!data)
    }
    function skillTrue(data) {
        setStatVisibility(!data)
        setSkillVisibility(data)
    }
    return (
            <div className="w-80 flex items-center justify-center h-full">
                <div className={`bg-white text-indigo-500 w-72 px-2 space-y-6 h-full shadow-2xl rounded-br-2xl rounded-bl-2xl`}>
                    <div className="h-full w-full px-4">   

                        <a href="#" className="text-indigo-500 flex items-center space-x-2">
                            <UserIcon className="w-8 h-8" />
                            <span className="text-2xl font-extrabold">My Portfolio</span>
                        </a>
                        <img
                            className="mt-6 rounded-lg shadow-xl"
                            src="/Profile.JPG"
                            alt="Woman workcationing on the beach"
                        />
                        <div className="flex justify-center my-6 space-x-2">
                            <button className="font-bold block py-2.5 px-4 hover:bg-gray-200 rounded 
                            cursor-pointer 
                            transition duration-100 transform hover:scale-125 
                            "
                            onClick={()=> statTrue(true)}
                            ><a>Stats</a></button>
                            <button className="font-bold block py-2.5 px-4 hover:bg-gray-200 rounded
                            cursor-pointer 
                            transition duration-100 transform hover:scale-125 
                            "
                            onClick={()=> skillTrue(true)}
                            ><a>Skill</a></button>
                        </div>
                        {/* stats */}
                        <Stats statsVisibility={statVisibility}/>
                        
                        <Skill skillVisibility={skillVisibility}/>

                    </div>
           
                    
                </div>
        
                
            </div>
    )
}

export default Banner
