import { useState, useEffect } from "react"
import Image from 'next/image'

import { loader } from "../utils"
import { Box, Center, Flex, Spacer } from '@chakra-ui/react'

export const ParseImage = ({uris, totalSupply})  => {
  
    const [ imageArray, setImageArray ] = useState()
  
    useEffect(() => {
      async function fetchData() {
        let tmpImageArray = new Array()
  
        let unpack = uris
  
        for(let i = 0; i < totalSupply; i++){
          let url = unpack[i]
          url = url.slice(7, url.length)
  
          const ipfsUrl = "https://ipfs.io/ipfs/"+url
        
          let response = await fetch(ipfsUrl);
          let data = await response.json();
        
          let image = data.image
  
          tmpImageArray.push(image)
        }
  
        setImageArray(tmpImageArray)
      }

      fetchData()
      
    }, [])
  
    if(!imageArray){
      return <p>No Image</p>
    }
    return (
    <>
        {imageArray.map(image => (
            <Box key={image} maxW="300px" padding="0.1rem">
                <Image key={image} loader={loader} src={image} height={300} width={300}/>
            </Box>
        ))}
    </>
    )
  }