// Generated by eosio-abi2ts 1.2.2 - eosio::abi/1.2

export type IAsset = string
export type IName = string
export type IBytes = string | number[] | Uint8Array
export type IChecksum256 = string
export type IPublicKey = string
export type ISymbol = string
export type ITimePoint = string
export type ITimePointSec = string
export type IBlockTimestampType = string
export type IInt64 = number | string
export type IUint8 = number
export type IUint16 = number
export type IUint32 = number
export type IUint64 = number | string
export type IUint128 = string
export type IFloat64 = number

export type IBlockSigningAuthority = IVariantBlockSigningAuthorityV0
export type IBlockchainParametersT = IBlockchainParametersV1

export type IVariantBlockSigningAuthorityV0 = ['block_signing_authority_v0', IBlockSigningAuthorityV0]

export interface IAbiHash {
  owner: IName
  hash: IChecksum256
}

export interface IActivate {
  feature_digest: IChecksum256
}

export interface IAuthority {
  threshold: IUint32
  keys: IKeyWeight[]
  accounts: IPermissionLevelWeight[]
  waits: IWaitWeight[]
}

export interface IBidRefund {
  bidder: IName
  amount: IAsset
}

export interface IBidname {
  bidder: IName
  newname: IName
  bid: IAsset
}

export interface IBidrefund {
  bidder: IName
  newname: IName
}

export interface IBlockHeader {
  timestamp: IUint32
  producer: IName
  confirmed: IUint16
  previous: IChecksum256
  transaction_mroot: IChecksum256
  action_mroot: IChecksum256
  schedule_version: IUint32
  new_producers?: IProducerSchedule
}

export interface IBlockInfoRecord {
  version: IUint8
  block_height: IUint32
  block_timestamp: ITimePoint
}

export interface IBlockSigningAuthorityV0 {
  threshold: IUint32
  keys: IKeyWeight[]
}

export interface IBlockchainParameters {
  max_block_net_usage: IUint64
  target_block_net_usage_pct: IUint32
  max_transaction_net_usage: IUint32
  base_per_transaction_net_usage: IUint32
  net_usage_leeway: IUint32
  context_free_discount_net_usage_num: IUint32
  context_free_discount_net_usage_den: IUint32
  max_block_cpu_usage: IUint32
  target_block_cpu_usage_pct: IUint32
  max_transaction_cpu_usage: IUint32
  min_transaction_cpu_usage: IUint32
  max_transaction_lifetime: IUint32
  deferred_trx_expiration_window: IUint32
  max_transaction_delay: IUint32
  max_inline_action_size: IUint32
  max_inline_action_depth: IUint16
  max_authority_depth: IUint16
}

export interface IBlockchainParametersV1 extends IBlockchainParameters {
  max_action_return_value_size: IUint32$
}

export interface IBuyram {
  payer: IName
  receiver: IName
  quant: IAsset
}

export interface IBuyrambytes {
  payer: IName
  receiver: IName
  bytes: IUint32
}

export interface ICanceldelay {
  canceling_auth: IPermissionLevel
  trx_id: IChecksum256
}

export interface ICfgpowerup {
  args: IPowerupConfig
}

export interface IClaimrewards {
  owner: IName
}

export interface IConnector {
  balance: IAsset
  weight: IFloat64
}

export interface IDelegatebw {
  from: IName
  receiver: IName
  stake_net_quantity: IAsset
  stake_cpu_quantity: IAsset
  transfer: boolean
}

export interface IDelegatedBandwidth {
  from: IName
  to: IName
  net_weight: IAsset
  cpu_weight: IAsset
}

export interface IDeleteauth {
  account: IName
  permission: IName
  authorized_by: IName$
}

export interface IEmissionState {
  tact_number: IUint64
  tact_duration: IUint64
  emission_factor: IFloat64
  current_supply: IAsset
  tact_open_at: ITimePointSec
  tact_close_at: ITimePointSec
  tact_fees: IAsset
  back_from_producers: IAsset
  tact_emission: IAsset
  emission_start: IAsset
}

export interface IEosioGlobalState extends IBlockchainParameters {
  max_ram_size: IUint64
  total_ram_bytes_reserved: IUint64
  total_ram_stake: IInt64
  last_producer_schedule_update: IBlockTimestampType
  last_pervote_bucket_fill: ITimePoint
  pervote_bucket: IInt64
  perblock_bucket: IInt64
  total_unpaid_blocks: IUint32
  total_activated_stake: IInt64
  thresh_activated_stake_time: ITimePoint
  last_producer_schedule_size: IUint16
  total_producer_vote_weight: IFloat64
  last_name_close: IBlockTimestampType
}

export interface IEosioGlobalState2 {
  new_ram_per_block: IUint16
  last_ram_increase: IBlockTimestampType
  last_block_num: IBlockTimestampType
  total_producer_votepay_share: IFloat64
  revision: IUint8
}

export interface IEosioGlobalState3 {
  last_vpay_state_update: ITimePoint
  total_vpay_share_change_rate: IFloat64
}

export interface IEosioGlobalState4 {
  continuous_rate: IFloat64
  inflation_pay_factor: IInt64
  votepay_factor: IInt64
}

export interface IExchangeState {
  supply: IAsset
  base: IConnector
  quote: IConnector
}

export interface IInit {
  version: IUint64
  core: ISymbol
}

export interface IInitemission {
  init_supply: IAsset
  tact_duration: IUint64
  emission_factor: IFloat64
}

export interface IKeyWeight {
  key: IPublicKey
  weight: IUint16
}

export interface ILimitauthchg {
  account: IName
  allow_perms: IName[]
  disallow_perms: IName[]
}

export interface ILinkauth {
  account: IName
  code: IName
  type: IName
  requirement: IName
  authorized_by: IName$
}

export interface INameBid {
  newname: IName
  high_bidder: IName
  high_bid: IInt64
  last_bid_time: ITimePoint
}

export interface INewaccount {
  creator: IName
  name: IName
  owner: IAuthority
  active: IAuthority
}

export interface IOnblock {
  header: IBlockHeader
}

export interface IOnerror {
  sender_id: IUint128
  sent_trx: IBytes
}

export interface IPermissionLevel {
  actor: IName
  permission: IName
}

export interface IPermissionLevelWeight {
  permission: IPermissionLevel
  weight: IUint16
}

export interface IPowerup {
  payer: IName
  receiver: IName
  days: IUint32
  payment: IAsset
  transfer: boolean
}

export interface IPowerupConfig {
  powerup_days?: IUint32
  min_powerup_fee?: IAsset
}

export interface IPowerupOrder {
  version: IUint8
  id: IUint64
  owner: IName
  net_weight: IInt64
  cpu_weight: IInt64
  ram_bytes: IInt64
  expires: ITimePointSec
}

export interface IPowerupState {
  net: IPowerupStateResource
  cpu: IPowerupStateResource
  ram: IPowerupStateResource
  powerup_days: IUint32
  min_powerup_fee: IAsset
}

export interface IPowerupStateResource {
  weight: IInt64
  utilization: IInt64
}

export interface IPowerupexec {
  user: IName
  max: IUint16
}

export interface IProducerInfo {
  owner: IName
  total_votes: IFloat64
  producer_key: IPublicKey
  is_active: boolean
  url: string
  unpaid_blocks: IUint32
  last_claim_time: ITimePoint
  location: IUint16
  producer_authority: IBlockSigningAuthority$
}

export interface IProducerInfo2 {
  owner: IName
  votepay_share: IFloat64
  last_votepay_share_update: ITimePoint
}

export interface IProducerKey {
  producer_name: IName
  block_signing_key: IPublicKey
}

export interface IProducerSchedule {
  version: IUint32
  producers: IProducerKey[]
}

export interface IRamDebtRecord {
  account: IName
  ram_debt: IInt64
}

export interface IRefund {
  owner: IName
}

export interface IRefundRequest {
  owner: IName
  request_time: ITimePointSec
  net_amount: IAsset
  cpu_amount: IAsset
}

export interface IRegproducer {
  producer: IName
  producer_key: IPublicKey
  url: string
  location: IUint16
}

export interface IRegproducer2 {
  producer: IName
  producer_authority: IBlockSigningAuthority
  url: string
  location: IUint16
}

export interface IRegproxy {
  proxy: IName
  isproxy: boolean
}

export interface IRmvproducer {
  producer: IName
}

export interface ISellram {
  account: IName
  bytes: IInt64
}

export interface ISetabi {
  account: IName
  abi: IBytes
  memo: IString$
}

export interface ISetacctcpu {
  account: IName
  cpu_weight?: IInt64
}

export interface ISetacctnet {
  account: IName
  net_weight?: IInt64
}

export interface ISetacctram {
  account: IName
  ram_bytes?: IInt64
}

export interface ISetalimits {
  account: IName
  ram_bytes: IInt64
  net_weight: IInt64
  cpu_weight: IInt64
}

export interface ISetcode {
  account: IName
  vmtype: IUint8
  vmversion: IUint8
  code: IBytes
  memo: IString$
}

export interface ISetparams {
  params: IBlockchainParametersT
}

export interface ISetpriv {
  account: IName
  is_priv: IUint8
}

export interface ISetram {
  max_ram_size: IUint64
}

export interface ISetramrate {
  bytes_per_block: IUint16
}

export interface IUndelegatebw {
  from: IName
  receiver: IName
  unstake_net_quantity: IAsset
  unstake_cpu_quantity: IAsset
}

export interface IUnlinkauth {
  account: IName
  code: IName
  type: IName
  authorized_by: IName$
}

export interface IUnregprod {
  producer: IName
}

export interface IUpdateauth {
  account: IName
  permission: IName
  parent: IName
  auth: IAuthority
  authorized_by: IName$
}

export interface IUpdtrevision {
  revision: IUint8
}

export interface IUserResources {
  owner: IName
  net_weight: IAsset
  cpu_weight: IAsset
  ram_bytes: IInt64
}

export interface IVoteproducer {
  voter: IName
  proxy: IName
  producers: IName[]
}

export interface IVoterInfo {
  owner: IName
  proxy: IName
  producers: IName[]
  staked: IInt64
  last_vote_weight: IFloat64
  proxied_vote_weight: IFloat64
  is_proxy: boolean
  flags1: IUint32
  reserved2: IUint32
  reserved3: IAsset
}

export interface IVoteupdate {
  voter_name: IName
}

export interface IWaitWeight {
  wait_sec: IUint32
  weight: IUint16
}

export interface IWasmcfg {
  settings: IName
}

export interface ILimitAuthChange {
  version: IUint8
  account: IName
  allow_perms: IName[]
  disallow_perms: IName[]
}

