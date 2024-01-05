import React from 'react'
import {data} from './data/data'


const Card = () => {
    const date=new Date();
    const month=date.getMonth();
    const day=date.getDate();
  return (
    <div>
        {
            data.map((item)=>(
            
                  item.date_of_birth.day===day&&item.date_of_birth.month===month+1&&
                  (
                    <h1>{item.name} <span>{item.age}Age</span></h1>
                    )
            )
            )
        }
    </div>
  )
}

export default Card