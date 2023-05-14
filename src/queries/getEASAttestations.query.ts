import { gql } from '@apollo/client'

const GET_EAS_ATTESTATIONS = gql`
  query Attestations($schemaId: String!) {
    attestations(
      where: { schemaId: { equals: $schemaId } }
      orderBy: [{ time: desc }]
    ) {
      decodedDataJson
    }
  }
`

export default GET_EAS_ATTESTATIONS
