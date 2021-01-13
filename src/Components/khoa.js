import React from 'react'

export default function khoa() {
    const func = ()=>{
        console.log('hello');
    }
    return (
        <div>
            <button onClick={()=>{func}}></button>
        </div>
    )
}
