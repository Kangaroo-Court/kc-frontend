import { gql } from '@apollo/client'

const GET_APECOIN_PRICE = gql`
  {
    prices(
      where: { assetPair_: { id: "APE/USD" } }
      first: 1
      orderBy: timestamp
      orderDirection: desc
    ) {
      id
      assetPair {
        id
      }
      timestamp
      price
    }
  }
`
export default GET_APECOIN_PRICE
