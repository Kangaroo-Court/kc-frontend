import {
  EAS,
  Offchain,
  SchemaEncoder,
  SchemaRegistry,
} from '@ethereum-attestation-service/eas-sdk'
import { ethers } from 'ethers'
import { useAccount } from 'wagmi'

const createJudgeAttestation = async (veredict: boolean, timeLock: number) => {
  const EASContractAddress = '0xC2679fBD37d54388Ce493F1DB75320D236e1815e' // Sepolia v0.26

  // Initialize the sdk with the address of the EAS Schema contract address
  const eas = new EAS(EASContractAddress)

  // Gets a default provider (in production use something else like infura/alchemy)
  const provider = ethers.providers.getDefaultProvider('sepolia')

  // Connects an ethers style provider/signingProvider to perform read/write functions.
  // MUST be a signer to do write operations!
  eas.connect(provider)

  // Initialize SchemaEncoder with the schema string
  const schemaEncoder = new SchemaEncoder(
    'address ADDRESS,uint256 JUDGE,bool FINAL_VERDICT,uint256 TIMELOCK'
  )

  const { address } = useAccount()

  const encodedData = schemaEncoder.encodeData([
    { name: 'ADDRESS', value: address!, type: 'address' },
    { name: 'JUDGE', value: 1, type: 'uint256' },
    { name: 'FINAL_VERDICT', value: veredict, type: 'bool' },
    { name: 'TIMELOCK', value: timeLock, type: 'uint256' },
  ])

  const schemaUID =
    '0x56c13171ec212b1bd36ca786b7ed53678a03136863c85063ec0fa23f15e8fcee'

  const tx = await eas.attest({
    schema: schemaUID,
    data: {
      recipient: '0xFD50b031E778fAb33DfD2Fc3Ca66a1EeF0652165',
      expirationTime: 0,
      revocable: true,
      data: encodedData,
    },
  })

  const newAttestationUID = await tx.wait()

  console.log(newAttestationUID)
}
