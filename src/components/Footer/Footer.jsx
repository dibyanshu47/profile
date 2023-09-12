import { Typography } from '@mui/material'
import React from 'react'

import './styles.css'

const Footer = () => {
  return (
    <>
        <div className="about-container">
            <Typography variant='h5' className='about-me'>About Me</Typography>
            <div className='other-container'>
                <div className='details-container bg-white'>
                    <Typography className='text'>Personal Details</Typography>
                    <ul>
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                    </ul>
                </div>
                <div className='details-container bg-grey'>
                    <Typography className='text'>Education / Skillset</Typography>
                    <ul>
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='copyright-container'>
            <Typography>&#169; Copyright 2023.</Typography>
        </div>
    </>
  )
}

export default Footer