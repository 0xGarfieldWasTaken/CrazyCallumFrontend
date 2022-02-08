import { EthSWRConfig } from 'ether-swr'
import { useWeb3React } from '@web3-react/core'

import { injected } from '../connectors/injectedConnector'

import { CrazyMint } from '../components/crazyMint'
import { CrazyURI } from '../components/crazyURI'

import { ABIs} from '../utils'
import { Flex, Spacer} from '@chakra-ui/react'

import Navbar from '../components/navbar'


export default function Gallery() {
  const { chainId, account, library, activate, active } = useWeb3React()

  const onClick = () => {
    activate(injected)
  }

  return (
    <div>
      <Navbar page={"gallery"}/>
      <Flex flexDirection="column" padding="3rem" backgroundColor="#7692FF" minHeight="calc(100vh - 4rem)">
        {active && chainId && (
          <EthSWRConfig
            value={{ web3Provider: library, ABIs: new Map(ABIs), refreshInterval: 30000 }}
          >
            <CrazyURI></CrazyURI>
            <Spacer />
            <CrazyMint></CrazyMint>
          </EthSWRConfig>
        )}
      </Flex>
    </div>
  )
}
