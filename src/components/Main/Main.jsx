import { Typography } from '@mui/material'
import React from 'react'
import MediaCard from '../MediaCard'

import './styles.css'

const Main = () => {
  return (
    <div className='main-container'>
        <Typography variant='h5' className='title'>Projects/Experience</Typography>
        <div className='project-container'>
            <MediaCard />
            <MediaCard />
            <MediaCard />
            <MediaCard />
            <MediaCard />
            <MediaCard />
        </div>
    </div>
  )
}

export default Main