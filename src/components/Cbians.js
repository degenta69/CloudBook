import React, { useState } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardActionArea from '@material-ui/core/CardActionArea'

const Cbians = () => {
  const [data, setdata] = useState([])

  window.onload = async () => {
    const response = await fetch('http://localhost:5000/api/auth/getallusers', {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()
    console.log(json)
    setdata(json.user)
  }

  return (
    <>
          <div className='container-* row d-flex flex-wrap mx-2 my-2'>
      {data.map(cbian => {
        return (
          <>

            <Card
              className="col-md-4 mx-5 my-3"
              key={cbian._id}
              sx={{
                maxWidth: 340,
                widht: '70%',
                borderWidth: '10px',
                height: '20rem',
                backgroundColor: '#212529',
                boxShadow: '5px 5px 17.5px -0.5px rgba(0,0,0,0.75)',
                borderRadius: '0px 4.25px 0px 8px / 37.5px 84.5px 37.5px 37.5px'
            }}
            >
              <CardActionArea>
                <CardMedia
                  component='img'
                  height='140'
                  image={`${cbian.pfp}`}
                  alt='green iguana'
                />
                <CardContent>
                  <Typography
                    className='text-white'
                    gutterBottom
                    variant='h5'
                    component='div'
                  >
                    Name: {cbian.name}
                  </Typography>
                  <Typography
                    className='text-white'
                    variant='h6'
                    color='inherit'
                  >
                    Email ID: {cbian.email}
                  </Typography>
                  <small>
                    <Typography
                      className='text-white'
                      variant='body2'
                      color='text.secondary'
                      >
                      Account created on: {new Date(cbian.Date).toGMTString().split('GMT')[0]}
                    </Typography>
                  </small>
                </CardContent>
              </CardActionArea>
            </Card>
          </>
        )
    })}
    </div>
    </>
  )
}

export default Cbians
