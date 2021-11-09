import ProjectCards from "./ProjectCards"

function ShowcaseBanner() {
    const cardInfo = {
        item1: {
            source: '/Website.png',
            href: 'https://stupefied-elion-1bf6f3.netlify.app/',
            click: 'Click to check out',
            info: 'A website I made with Next.js hosted on Netlify'
        },
        item2: {
            source: '/Placeholdercard.png',
            href: '#',
            click: 'Coming Soon...',
            info: ''
        },
        item3: {
            source: '',
            href: ''
        },
        item4: {
            source: '',
            href: ''
        },
    }
    return (
        <div className="flex relative h-full justify-center items-center">
    
            <div className="w-1/4">
                
            </div>
            
            <nav className="h-full items-center flex text-2xl whitespace-nowrap 
            space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide
            rounded-2xl px-24">
                {/* Card Template */}
                
                <ProjectCards source={cardInfo.item1.source} href={cardInfo.item1.href} click={cardInfo.item1.click} info={cardInfo.item1.info}/>
                <ProjectCards source={cardInfo.item2.source} href={cardInfo.item2.href} click={cardInfo.item2.click} info={cardInfo.item2.info}/>
                <ProjectCards source={cardInfo.item2.source} href={cardInfo.item2.href} click={cardInfo.item2.click} info={cardInfo.item2.info}/>
                <ProjectCards source={cardInfo.item2.source} href={cardInfo.item2.href} click={cardInfo.item2.click} info={cardInfo.item2.info}/>

                {/* <h1 className='cursor-pointer 
                        transition duration-100 transform hover:scale-125 
                        hover:text-blue-500 active:text-red-500'>Project C
                </h1> */}


            {/* {Object.entries(requests).map(([key, { title , url }]) => (
                <h2 
                    key={key}
                    onClick={() => router.push(`/?genre=${key}`)} 
                    className='last:pr-24 cursor-pointer 
                    transition duration-100 transform hover:scale-125 
                    hover:text-white active:text-red-500'
                >
                    {title}
                </h2>
            ))} */}


            </nav>     
            <div className="w-1/4">
              
            </div>     
        </div>
    )
}

export default ShowcaseBanner

// function ShowcaseBanner() {
//     return (
//         <div className="max-h-80 justify-center items-center bg-red-300">

//             <div className="flex justify-center items-center">
//                 <div className="flex bg-yellow-300 h-80 p-8 space-x-16 overflow-x-auto overflow-hidden ">
                    
//                     <div className="overflow-hidden">
//                         <img
//                             className="h-96 object-cover min-w-full"
//                             src="https://cdn.pixabay.com/photo/2021/10/27/19/09/cat-6748193_960_720.jpg"
//                             alt="Woman workcationing on the beach"
//                         />
//                     </div>

//                     <div className="min-w-40 overflow-hidden">
//                         <img
//                             className="h-96 min-w-40 object-cover"
//                             src="https://cdn.pixabay.com/photo/2021/10/27/19/09/cat-6748193_960_720.jpg"
//                             alt="Woman workcationing on the beach"
//                         />
//                     </div>

//                     <div className="min-w-1/4 overflow-hidden">
//                         <img
//                             className="h-96 min-w-40 object-cover"
//                             src="https://cdn.pixabay.com/photo/2021/10/27/19/09/cat-6748193_960_720.jpg"
//                             alt="Woman workcationing on the beach"
//                         />
//                     </div>
            
//                 </div>
//             </div>

//         </div>
//     )
// }

// export default ShowcaseBanner
