export const getApeCoinBalance = `query TokenBalanceQuery {
  TokenBalance(
    input: {
      blockchain: ethereum
      tokenAddress: "0x6982508145454Ce325dDbE47a25d4ec3d2311933"
      owner: "0xa43fe16908251ee70ef74718545e4fe6c5ccec9f"
    }
  ) {
    tokenAddress
    amount
    formattedAmount
    lastUpdatedTimestamp
    owner {
      addresses
    }
  }
}`
