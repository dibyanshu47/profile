import React from 'react'
import './styles.css'
import { Button, ButtonGroup, Typography } from '@mui/material'

const Header = () => {
    return (
        <div className='header-container'>
            <div className="profile-section">
                <img src="https://img.asmedia.epimg.net/resizer/R2wnENoBBTyq28k5X3K0y2R-oG8=/1472x1104/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/S6IGR3GCHFCCBMEN46TFDV762A.jpg" alt="profilePicture" className='photo' />
                <div className="details">
                    <Typography variant='h6'>Dibyanshu Jaiswal</Typography>
                    <p>Intern @DevRev</p>
                    <Button variant='contained'>Email Me</Button>
                </div>
            </div>
            <div className='button-group'>
                <ButtonGroup variant="contained" aria-label="outlined primary button group">
                    <Button>Profile</Button>
                    <Button>About Me</Button>
                    <Button>Contact Me</Button>
                </ButtonGroup>
            </div>
        </div>
    )
}

export default Header