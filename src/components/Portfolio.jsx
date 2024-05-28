import React from 'react';
// import spring from "../../public/spring.png"
// import html from "../../public/html.png"
import java from "../../public/java.png"
import python from "../../public/python.png"
// import oracle from "../../public/oracle.png"
import mongoDB from "../../public/mongoDB.png"
import express from "../../public/express.png"
import reactjs from "../../public/reactjs.png"
// import javascript from "../../public/javascriipt.png"
import nodejs from "../../public/node.png"
function Portfolio() {
  const cardItem=[
    {
      id:1,
      logo:mongoDB,
      name:"MongoDB"
    },
    {
      id:2,
      logo:express,
      name:"Express"
    },
    {
      id:3,
      logo:reactjs,
      name:"Reactjs"
    },
    {
      id:4,
      logo:nodejs,
      name:"Nodejs"
    },
    {
      id:5,
      logo:"python",
      name:"Python"
    },
    {
      id:6,
      logo:java,
      name:"Java"
    }
  ]
  return ( 
  <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10">
     <div>
       <h1 className="text-3xl font-bold mb-5">Portfolio</h1>
     <span className=" underline font-semibold">Featured Projects</span>
     <div>
        {cardItem.map(({ id, logo, name }) => (
          <div key={id}>
            <img src={logo} alt="" />
            <div>
               <div>{name}</div>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div>
              <button>Video</button>
              <button>Source code</button>
            </div>
            </div>
        ))}
        </div>
   </div>
</div>

   );
}

export default Portfolio;
