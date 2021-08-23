import { Web3Provider } from '@ethersproject/providers'
import { InjectedConnector } from '@web3-react/injected-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { ChainId } from '../sdk'
import { NetworkConnector } from './NetworkConnector'

const NETWORK_URLS = {
  [ChainId.POA]: 'https://core.poa.network',
  [ChainId.SOKOL]: 'https://sokol.poa.network'
}

export const network = new NetworkConnector({
  urls: NETWORK_URLS,
  defaultChainId: 99
})

let networkLibrary: Web3Provider | undefined
export function getNetworkLibrary(): Web3Provider {
  return (networkLibrary = networkLibrary ?? new Web3Provider(network.provider as any))
}

export const injected = new InjectedConnector({
  supportedChainIds: [99, 77]
})

// mainnet only
export const walletconnect = new WalletConnectConnector({
  supportedChainIds: [99, 77],
  rpc: NETWORK_URLS,
  bridge: 'https://bridge.walletconnect.org',
  qrcode: true,
  pollingInterval: 15000
})
