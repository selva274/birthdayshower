import React from 'react'
import {data} from './data/data'
const Upcomming = () => {
    const date=new Date();
    const month=date.getMonth();
    const day=date.getDate();
  return (
    <div>
         <div>
        {
            data.map((item)=>(            
                  item.date_of_birth.day>day&&item.date_of_birth.month===month+1&&
                  (<h1>{item.name}</h1>)
               )
            )   
        }
    </div>
    </div>
  )
}

export default Upcomming