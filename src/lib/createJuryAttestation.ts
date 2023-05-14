import { EAS, SchemaEncoder } from '@ethereum-attestation-service/eas-sdk'
import { Signer } from 'ethers'

const createJuryAttestation = async (
  signer: Signer,
  address: string,
  veredict: boolean,
  juryNumber: number
) => {
  try {
    const EASContractAddress = '0x1a5650D0EcbCa349DD84bAFa85790E3e6955eb84' // Sepolia v0.26

    // Initialize the sdk with the address of the EAS Schema contract address
    const eas = new EAS(EASContractAddress)

    // Connects an ethers style provider/signingProvider to perform read/write functions.
    // MUST be a signer to do write operations!
    eas.connect(signer)

    // Initialize SchemaEncoder with the schema string
    const schemaEncoder = new SchemaEncoder(
      'address ADDRESS,uint256 JURY,bool VERDICT'
    )

    const encodedData = schemaEncoder.encodeData([
      { name: 'ADDRESS', value: address, type: 'address' }, // eslint-disable-line @typescript-eslint/no-unnecessary-type-assertion
      { name: 'JURY', value: juryNumber, type: 'uint256' }, // eslint-disable-line @typescript-eslint/no-unnecessary-type-assertion
      { name: 'VERDICT', value: veredict, type: 'bool' }, // eslint-disable-line @typescript-eslint/no-unnecessary-type-assertion
    ])

    const tx = await eas.attest({
      schema:
        '0x56c13171ec212b1bd36ca786b7ed53678a03136863c85063ec0fa23f15e8fcee',
      data: {
        recipient: '0x04B022a51E4413181D8BeF4C06eC642a2C107e3F', //judge
        expirationTime: 0,
        revocable: false,
        data: encodedData,
      },
    })

    const newAttestationUID = await tx.wait()
  } catch (e) {
    console.error(e)
  }
}

export default createJuryAttestation
