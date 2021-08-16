import { ChainId } from '../../sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x88F11829a765EB8B310fdd22310dED6c2AdcF130'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
