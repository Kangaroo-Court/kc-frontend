import { EAS, SchemaEncoder } from '@ethereum-attestation-service/eas-sdk'
import { Signer } from 'ethers'

const getSchemaUID = (juryNumber: number) => {
  switch (juryNumber) {
    case 1:
      return '0xb50db0f640c9e9d6f22efa9ac2cdb347d62a8253ccbd0a8cbaa1b42bf85b28f4'
    case 2:
      return '0xfdf312958f2f6e8ebea5130060e3c902d84ad66084cf1277610d16f503876221'
    case 3:
    default:
      return '0xf74e7e9ef220a498ed0cfebc7d3983614ff18ad7360a83b93009c0b9ff80c0fc'
  }
}

const createJuryAttestation = async (signer: Signer, address: string, veredict: boolean, juryNumber: number) => {
  try {
    const EASContractAddress = '0x1a5650D0EcbCa349DD84bAFa85790E3e6955eb84' // Sepolia v0.26

    // Initialize the sdk with the address of the EAS Schema contract address
    const eas = new EAS(EASContractAddress)

    // Connects an ethers style provider/signingProvider to perform read/write functions.
    // MUST be a signer to do write operations!
    eas.connect(signer)

    // Initialize SchemaEncoder with the schema string
    const schemaEncoder = new SchemaEncoder('address ADDRESS,uint256 JURY,bool VERDICT')

    const encodedData = schemaEncoder.encodeData([
      { name: 'ADDRESS', value: address, type: 'address' }, // eslint-disable-line @typescript-eslint/no-unnecessary-type-assertion
      { name: 'JURY', value: juryNumber, type: 'uint256' }, // eslint-disable-line @typescript-eslint/no-unnecessary-type-assertion
      { name: 'VERDICT', value: veredict, type: 'bool' }, // eslint-disable-line @typescript-eslint/no-unnecessary-type-assertion
    ])

    const tx = await eas.attest({
      schema: getSchemaUID(juryNumber),
      data: {
        recipient: '0x04B022a51E4413181D8BeF4C06eC642a2C107e3F', //judge
        expirationTime: 0,
        revocable: false,
        data: encodedData,
      },
    })

    await tx.wait()
  } catch (e) {
    console.error(e)
  }
}

export default createJuryAttestation
