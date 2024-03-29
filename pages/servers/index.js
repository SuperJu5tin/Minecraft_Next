import React, {useEffect} from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Button, Input, Box, ButtonGroup } from '@mui/material'
import NavBar from '../commonThings/NavBar'

export default function ServersList() {

  useEffect(() => {
    document.body.style.margin = 0
    document.body.style.padding = 0
    document.body.style.backgroundSize = "auto, 100%"
    document.body.style.background = "rgb(40, 189, 139)"
    document.body.style.color = "black"
    document.body.style.fontFamily = "Arial, Helvetica, sans-serif";
    document.body.style.backgroundRepeat = "no-repeat"
  }, [])

  const router = useRouter()

  const customServer =  async (e) => {
    if (e.key !== "Enter") {
      return 
    }
    e.preventDefault()
    const server = e.target.value.replace(' ', '').toLowerCase()
    router.push('/servers/' + server)

  }

  return (
    <Box>
      <Head>
        <title>Servers</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Box sx={{
        margin:"50px"
      }} >
        <Box>
          <Input placeholder='Custom Server' onKeyDown={customServer} />
        </Box>
        <Box>
          <ButtonGroup>
            <Button onClick={() => {router.push('/servers/boissf4')}}>Bois Sky Factory</Button>
          </ButtonGroup>
        </Box>
      </Box>
    </Box>
  )
}
