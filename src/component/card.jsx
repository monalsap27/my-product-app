// eslint-disable-next-line no-unused-vars
// import React from 'react'
import React, { useState } from 'react'
import CardKonten from './isi'
import {konten} from './../theme/isi'

const KontenIsi = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-8 px-32">
            {konten.map((index) => (
               <CardKonten key={index.id} isi={index}/>
            ))}
            
        </div>
    )
}

export default KontenIsi