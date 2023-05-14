import { EAS, SchemaEncoder } from '@ethereum-attestation-service/eas-sdk'
import { Signer, ethers } from 'ethers'

const createJudgeAttestation = async (
  signer: Signer,
  address: string,
  veredict: boolean,
  timeLock: number
) => {
  const EASContractAddress = '0x1a5650D0EcbCa349DD84bAFa85790E3e6955eb84' // Sepolia v0.26

  // Initialize the sdk with the address of the EAS Schema contract address
  const eas = new EAS(EASContractAddress)

  // Gets a default provider (in production use something else like infura/alchemy)
  eas.connect(signer)

  // Initialize SchemaEncoder with the schema string
  const schemaEncoder = new SchemaEncoder(
    'address ADDRESS,uint256 JUDGE,bool FINAL_VERDICT,uint256 TIMELOCK'
  )

  const encodedData = schemaEncoder.encodeData([
    { name: 'ADDRESS', value: address, type: 'address' }, // eslint-disable-line @typescript-eslint/no-unnecessary-type-assertion
    { name: 'JUDGE', value: 1, type: 'uint256' }, // eslint-disable-line @typescript-eslint/no-unnecessary-type-assertion
    { name: 'FINAL_VERDICT', value: veredict, type: 'bool' }, // eslint-disable-line @typescript-eslint/no-unnecessary-type-assertion
    { name: 'TIMELOCK', value: timeLock, type: 'uint256' }, // eslint-disable-line @typescript-eslint/no-unnecessary-type-assertion
  ])

  const schemaUID =
    '0xbf564b3ed16b42c3bcfad0e6f5f6016b9657dabc57a4c4e37706b6d017918a55'

  const tx = await eas.attest({
    schema: schemaUID,
    data: {
      recipient: '0x42f7B8Aa00D05daA58Dfd1c6060B97c0e0318Fe9', //bailliff
      expirationTime: 0,
      revocable: false,
      data: encodedData,
    },
  })

  const newAttestationUID = await tx.wait()
}
export default createJudgeAttestation
