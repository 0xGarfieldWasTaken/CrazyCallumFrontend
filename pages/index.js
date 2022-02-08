import { Center, Flex, Heading, Text } from '@chakra-ui/react'

import Navbar from '../components/navbar'


export default function Home() {
  return (
    <div>
      <Navbar page={"home"}/>
      <Flex flexDirection="column" padding="3rem" backgroundColor="#7692FF" minHeight="calc(100vh - 4rem)">
        <Center>
          <Flex flexDir="column">
            <Heading>Welcome to Crazy Callums!</Heading>
            <Text>This is Crazy Callums the cool new NFT Project. <br />Here you will be able to mint Crazy Callums and get your own Callum on the blockchain!</Text>
          </Flex>
        </Center>
      </Flex>
    </div>
  )
}
