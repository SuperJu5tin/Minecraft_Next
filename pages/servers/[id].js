import { useRouter } from 'next/router'
import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import { Button, Input, Box, ButtonGroup } from '@mui/material'
import NavBar from '../commonThings/NavBar'

function Server() {

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

  const [serverLog, setServerLog] = useState([])
  const [isServerLogsUpdating, setIsServerLogsRunning] = useState()
  const [isServerRunning, setIsServerRunning] = useState()
  const { id } = router.query
  const server = id
  let interval

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  // fetch(path)

  // const getServerInfo = (path) => {
  //   return fetch("http://localhost:5000/" + path, {
  //     method : 'POST',
  //   }).then((response) => {
  //     return response.json()
  //   })
  // }

  // // sync client and server logs

  // const updateLogs = async () => {
  //   setServerLog(await getServerInfo(server + '/logs'))
  //   setIsServerRunning(await getServerInfo(server + '/check'))
  //   if (!isServerLogsUpdating) {
  //     setIsServerLogsRunning(true)
  //     console.log('test2')
  //     clearInterval(interval)
  //     interval = setInterval(async () => {
  //       setIsServerRunning(await getServerInfo(server + '/check'))
  //       if (await getServerInfo(server + '/check')) {
  //         setServerLog(await getServerInfo(server + '/logs'))
  //       }
  //       console.log('test')
  //     }, 1000)
  //   } else clearInterval(interval)
  // }

  // // starts server

  // const startServer = async () => {
  //   if (await getServerInfo(server + '/start')) {
  //     updateLogs()
  //   }
  // }

  // // sends minecraft command through input to minecraft server

  // const consoleCommand =  async (e) => {
  //   if (e.key !== "Enter") {
  //     return 
  //   }
  //   e.preventDefault()
  //   const options = {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({response:e.target.value}),
  //   };
  //   fetch(server + '/command', options)
  //   setServerLog(await getServerInfo(server + '/logs'))
  //   console.log('test3')
  //   e.target.value = ""
  // }

  return (
    <Box>
      <Head>
        <title>{capitalizeFirstLetter(server)}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Box sx={{
        margin:"20px",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column"
      }}>
        {/* <h1 >{server1.otherStuff}</h1> */}
        <Box sx={{
          display:"flex",
          justifyContent:"center"
        }}>
          <ButtonGroup variant='text'>
            <Button>Start Server</Button>
            <Button>Update Log</Button>
          </ButtonGroup>
          <h3>{(typeof isServerRunning === 'undefined') ? ("Loading..."): (isServerRunning ? "The Server is up" : "The Server is down")}</h3>
        </Box>
        <Box sx={{
          overflow:"scroll", 
          borderStyle:"solid", 
          borderColor:"black", 
          padding:"10px", 
          maxHeight:"500px", 
          width:"600px",
          background:"white",
          display: isServerRunning ? "block" : "none"
        }}>
          {(typeof serverLog === []) ? (""): (serverLog ? (
            serverLog.map((serverLog, i) => (
              <p key={i}>{serverLog}</p>
            ))
          ): (""))}
          <Input sx={{width:"500px"}}/>
        </Box>
      </Box>
    </Box>
  )
}

// export const getServerSideProps = async ({params}) => {
//   const req = await fetch(`http://localhost:3000/${params.id}.json`);
//   const data = await req.json();

//   return {
//     props: { server1: data},
//   }
// }



// export const getStaticPaths = async () => {

//   const req = await fetch(`http://localhost:3000/${params.id}.json`);
//   const data = await req.json();

//   return {
//     props: { server1: data},
//   }

//   return {
//       paths, //indicates that no page needs be created at build time
//       fallback: false //indicates the type of fallback
//   }
// }

// export async function getStaticProps({ params }) {
//   const req = await fetch(`http://localhost:3000/${params.id}.json`);
//   const data = await req.json();

//   return {
//     props: { server1: data},
//   }

// }

export async function getStaticProps() {
  const { id } = router.query
  const res = await fetch('http://localhost:5000/' + id)
  const posts = await res.json()

  return {
    props: {
      posts,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  }
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// the path has not been generated.
export async function getStaticPaths() {
  const res = await fetch('https://.../posts')
  const posts = await res.json()

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { id: post.id },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: blocking } will server-render pages
  // on-demand if the path doesn't exist.
  return { paths, fallback: 'blocking' }
}

export default Server