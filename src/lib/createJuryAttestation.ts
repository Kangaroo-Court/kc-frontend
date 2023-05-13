import { EAS, SchemaEncoder } from '@ethereum-attestation-service/eas-sdk'
import { ethers } from 'ethers'

const createJuryAttestation = async (address: string, veredict: boolean) => {
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
    'address ADDRESS,uint256 JURY,bool VERDICT'
  )

  const encodedData = schemaEncoder.encodeData([
    { name: 'ADDRESS', value: address!, type: 'address' }, // eslint-disable-line @typescript-eslint/no-unnecessary-type-assertion
    { name: 'JURY', value: 1, type: 'uint256' }, // eslint-disable-line @typescript-eslint/no-unnecessary-type-assertion
    { name: 'VERDICT', value: veredict, type: 'bool' }, // eslint-disable-line @typescript-eslint/no-unnecessary-type-assertion
  ])

  const tx = await eas.attest({
    schema:
      '0x56c13171ec212b1bd36ca786b7ed53678a03136863c85063ec0fa23f15e8fcee',
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
