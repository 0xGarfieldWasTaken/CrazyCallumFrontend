import { EthSWRConfig } from 'ether-swr'
import { useWeb3React } from '@web3-react/core'

import { injected } from '../connectors/injectedConnector'

import { EthBalance } from '../components/ethBalance'

import { ABIs} from '../utils'
import { Button, Center, Flex, Heading, Spacer, Text } from '@chakra-ui/react'
import { FreeMintUsed } from '../components/freeMintAvailable'

import Link from 'next/link'

const GalleryLink = () => {
    return (
        <Center _hover={{ background: "#4861a8" }} paddingRight="1rem">
            <Link href="/gallery">
              <Text>Your Callums</Text>
            </Link>
          </Center>
    )
}


export default function Navbar({page}) {
  const { chainId, account, library, activate, active } = useWeb3React()

  let home = false;
  
  if(page =="home"){
      home = true;
  }

  const onClick = () => {
    activate(injected)
  }

  return (
      <Flex flexDirection="row" minHeight="4rem" backgroundColor="#3D518C">
          <Center paddingLeft="1rem" paddingRight="1rem">
            <Link href="/">
                <Heading _hover={{ background: "#4861a8" }} textColor="#091540">Crazy Callums!</Heading>
            </Link>
          </Center>
          {home ? <GalleryLink /> : <></>}
          <Spacer />
          <Center paddingRight="1rem">
            {active && chainId && (
              <Heading size="m">
                <EthSWRConfig
                  value={{ web3Provider: library, ABIs: new Map(ABIs), refreshInterval: 30000 }}
                >
                  <Flex flexDirection="column">
                    <FreeMintUsed />
                    <Center>
                      <EthBalance></EthBalance>
                    </Center>
                  </Flex>
                </EthSWRConfig>
              </Heading>
              )}
          </Center>
          <Center paddingRight="2rem">
            {active ? <Text>Account: {account}</Text> : <Button onClick={onClick} backgroundColor="#1B2CC1" >Connect To Wallet</Button>}
          </Center>
      </Flex>
  )
}
