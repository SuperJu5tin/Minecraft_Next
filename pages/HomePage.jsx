import Head from 'next/head'
import { Box, Button, ButtonGroup } from '@mui/material'
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import NavBar from './commonThings/NavBar'


export default function HomePage() {

  const router = useRouter()

  useEffect(() => {
    document.body.style.margin = 0
    document.body.style.padding = 0
    document.body.style.background = "rgb(40, 189, 139)"
    document.body.style.color = "white"
    document.body.style.fontFamily = "Arial, Helvetica, sans-serif";
  }, [])

  return (
    <>
      <Head>
        <title>Next Minecraft</title>
        <meta name="Site to check Minecraft server status" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
    </>
  )
}
