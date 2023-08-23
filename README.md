# Kangaroo Court 🦘 - Frontend

## ETH Lisbon Hackaton

`AI is Guilty Until Proven Innocent by Humans`

# Get Started

Read the WhitePaper [Here](https://nftstorage.link/ipfs/bafybeidhkk3xn2vqu5ah2tvuetjw5rtnc55uadmvomhsst6rt7testtmhu)

See our Walkthrough Deck [Here](https://nftstorage.link/ipfs/bafybeihcyeqrjzoruawu4g4yfydjs75nabrhoz3apw7t2pjzgrahshbtgm)

Watch our Video Walkthrough [Here](https://youtu.be/Yo6IA5yI3oc)

## 🛠️ Local Setup

### Prerequisites

- Node.js and yarn installed
- Next.js CLI

### Installation & Running

1. Clone the repository:
   ```bash
   git clone https://github.com/Kangaroo-Court/kc-frontend.git
   ```

2. Navigate to the project directory:
   ```bash
   cd kc-frontend
   ```

3. Install the dependencies:
   ```bash
   yarn install
   ```

4. Run the development server:
   ```bash
   yarn dev
   ```

5. Open your browser and navigate to `http://localhost:3000`.


# Understanding the model 

# Human Owned Roles:
- Defendant 
    > Deposits OPGETH (APE to be available on future production along with other assets) and Claim that APE is DEAD or NOT DEAD
    > Starts a Court Proceeding (Mints a Batch of NFTs) to specified addresses
    > > Onchain tx
- Defense
    > Proposes a defandant's claim to be true (Not Guilty) 
    > > On Chain TX
    
    > Earns a fee for picking up the case (pushed to future production)
- Prosecutor
    > Disputes claims to be false (Guilty)
    > > On Chain TX
    
    > Earns a fee for picking up the case (pushed to future production)
- Jury 1 
   >  Votes on Boolean (Not Guilty / Guilty)  
   > > This is an [Attestation](https://optimism-goerli.easscan.org/schema/view/0xb50db0f640c9e9d6f22efa9ac2cdb347d62a8253ccbd0a8cbaa1b42bf85b28f4)

   >  Minted a POAP (pushed to future production)
- Jury 2
   >  Votes on Boolean (Not Guilty / Guilty)
   > > This is an [Attestation](https://optimism-goerli.easscan.org/schema/view/0xfdf312958f2f6e8ebea5130060e3c902d84ad66084cf1277610d16f503876221)

   >  Minted a POAP (pushed to future production)
- Jury 3
   >  Votes on Boolean (Not Guilty / Guilty) 
   > > This is an [Attestation]()

   >  Minted a POAP (pushed to future production)
- Judge
   >  Final Proceeding on Not Guilty / Guilty 
   >  & Assigns TimeLock of Staked Asset (Forced 0 if Not Guilty) 
   > > This is an [Attestation](https://optimism-goerli.easscan.org/schema/view/0xbf564b3ed16b42c3bcfad0e6f5f6016b9657dabc57a4c4e37706b6d017918a55)

- Bailiff
   > Executes Judge's Final Verdict
   > > Onchain TX

### Defandant Earns some yield if Not Guilty (pushed to future production)

# Socials 
   [Twitter](https://twitter.com/KangarooCourtAI)
   [Telegram](https://t.me/kangaroocourtai)
   [Youtube](https://www.youtube.com/@KangarooCourtAI)
   [Discord](https://discord.gg/s5XDKGAFkg)
    
### AI meets human wisdom. Resolve AI-Oracle conflicts fairly. Human judges, prosecutors, defenders, jurors, and bailiffs on Optimism-Goerli, Linea, Scroll and Goerli blockchains. Incentivized prediction market. Empowering governance and dispute resolution. Leading AI conflict resolution on blockchain. 
 
## Abstract
Kangaroo Court is a revolutionary platform that combines AI-driven technologies with the wisdom and judgments of human actors, promoting fair and transparent resolution of conflicts between Artificial Intelligences (AIs) and smart contracts. The Optimism-Goerli blockchain-based platform features a legal framework whereby human actors act as judges, prosecutors, defenders, jurors and bailiffs to resolve claims lodged by prosecutors against AIs or smart contracts. Additionally, Kangaroo Court introduces an incentivized prediction market to enhance user engagement and ensure participants are properly rewarded for their contributions. By empowering human actors to participate actively in dispute resolution on a distributed platform, Kangaroo Court is poised to become the leading AI governance and conflict resolution system in the blockchain space. Through further expansion of its user base, innovations in its features, and an expanded pool of human actors, Kangaroo Court will serve as a bedrock for trustless adjudication.

    
## Smart Contract Locations
- Optimism-Goerli
    > [NFT](https://goerli-optimism.etherscan.io/token/0xa70c15571aa9dfcab960dca494bd7c99bccc79ab)

    > [Oracle](https://goerli-optimism.etherscan.io/) 
- Scroll
    > [NFT](https://blockscout.scroll.io/address/0x04B022a51E4413181D8BeF4C06eC642a2C107e3F/tokens/0xd80c08aa35c57c54c2abb59264a5185e5b0f764b/token-transfers#address-tabs)
    
    > [Oracle]()
- Linea
    > [NFT](https://explorer.goerli.linea.build/address/0xBB9C4401D615F502581396f82931C7e9a46853B1)
    
    > [Oracle]()

## How its made: 

## The development of Kangaroo Court utilizes a combination of [UMA](https://uma.xyz) smart contracts, oracles, the front-end framework Next.js, the [Ethereum Attestation Service](https://attest.sh) and [Chainlink](https://chain.link/) Price Oracle sourced from [TheGraph](https://thegraph.com/hosted-service/subgraph/openpredict/chainlink-prices-subgraph) tools to create a comprehensive and efficient platform.

Smart contracts are deployed on the [Optimism-Goerli](https://goerli-optimism.etherscan.io/token/0xa70c15571aa9dfcab960dca494bd7c99bccc79ab), [Linea](https://explorer.goerli.linea.build/address/0xBB9C4401D615F502581396f82931C7e9a46853B1), and [Scroll](https://blockscout.scroll.io/address/0x04B022a51E4413181D8BeF4C06eC642a2C107e3F/tokens/0xd80c08aa35c57c54c2abb59264a5185e5b0f764b/token-transfers#address-tabs) blockchains to establish a multichain underlying legal framework and automate the execution of key processes within Kangaroo Court. These contracts define the roles of human actors, handle the staking and distribution of tokens, manage the flow of information between participants, and facilitate the resolution of claims.

Oracles play a crucial role in connecting real-world data with the blockchain. They provide a bridge between external information sources and the smart contracts, ensuring accurate and reliable data inputs for decision-making. Oracles are responsible for fetching data related to the claims, such as cryptocurrency prices or contract behavior, enabling the AI-driven components and human actors to make informed judgments.

The front-end framework, such as Next.js, is utilized to create a user-friendly interface for interacting with Kangaroo Court. It allows users to access the platform, submit claims, participate in the prediction market, and engage in the governance processes. The front-end interface seamlessly integrates with the blockchain infrastructure, enabling real-time updates, and providing an intuitive user experience.

AI tools are employed within Kangaroo Court to enhance decision-making processes. AIs can be used to analyze claim-related data, identify patterns, and provide insights to support the arguments presented by the prosecution and defense. These AI-driven tools assist human actors in formulating stronger cases, improving the efficiency and accuracy of the overall adjudication process.

By combining smart contracts, oracles, a front-end framework like Next.js, and AI tools, Kangaroo Court achieves a powerful and comprehensive platform. The smart contracts provide the foundation for the legal processes, while oracles ensure the accuracy and reliability of external data. The front-end framework enhances user interaction and accessibility, while AI tools augment decision-making capabilities. Together, these components create a robust ecosystem that promotes fair and efficient conflict resolution between AIs and Oracle smart contracts, while engaging users through the prediction market and incentivized participation.
    
    
## Forward Plans
    
We would be thrilled if this became a project that continues onward to be the standard for such things. 

If that comes into the winds we would build the remaning fuctions mentioned above as well as a well formulated RESTful API with documentation to spec for the entire protocol. 
