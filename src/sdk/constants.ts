import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  POA = 99,
  SOKOL = 77
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const FACTORY_ADDRESS = {
  [ChainId.POA]: '0xd229680C2543385Add6b317Eb9037377dD3d97F1',
  [ChainId.SOKOL]: '0x883F716C70C7A379D7B60b353Cd55bac3A5Fa89d'
}

export const INIT_CODE_HASH = {
  [ChainId.POA]: '0x1a804ba2d175da219b3c2623c4965243a242d2c236e994aef8dddf15274b28b2',
  [ChainId.SOKOL]: '0x0a4315b3f4b202b4a2d1fce1704356f9c9e0f3cc9b1da9bdca7776d6a1c5da7a'
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const FEES_NUMERATOR = JSBI.BigInt(9975)
export const FEES_DENOMINATOR = JSBI.BigInt(10000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
