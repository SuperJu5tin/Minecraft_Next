import { Box, ButtonGroup, Button } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'

export default function NavBar() {
  
  const router = useRouter()
  const reDirect = (href) => {
    router.push('/' + href)
  }

  return (
    <Box sx={{
      backgroundColor:"black",
      textAlign:"center",
      margin:0,
      padding:0,
    }}>
      <ButtonGroup color='info' variant='text'>
        <Button onClick={() => reDirect('')}>Home</Button>
        <Button onClick={() => reDirect('/servers')} >Servers</Button>
        <Button onClick={() => reDirect('/servers/boissf4')} >Bois SF4</Button>
      </ButtonGroup>
    </Box>
  )
}