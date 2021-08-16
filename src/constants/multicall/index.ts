import { ChainId } from '../../sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.POA]: '0x88F11829a765EB8B310fdd22310dED6c2AdcF130',
  [ChainId.SOKOL]: '0xf0d6Cb7619dAB17FfD07F8fd40769acfF1099E28'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
