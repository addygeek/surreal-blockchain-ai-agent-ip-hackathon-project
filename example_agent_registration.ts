
// Register AI Agent as IP Asset using Story SDK
import { StoryClient } from '@story-protocol/sdk';

const client = new StoryClient({ chainId: 1516 }); // Story testnet

const agentMetadata = {
  title: "AI Trading Agent",
  description: "Autonomous agent for DeFi trading strategies", 
  creators: [{
    name: "Developer Name",
    address: "0x...",
    contributionPercent: 100
  }],
  aiMetadata: {
    characterFileUrl: "ipfs://...",
    characterFileHash: "0x..."
  },
  ipType: "AI Agent",
  tags: ["AI Agent", "Trading", "DeFi"]
};

const result = await client.ipAsset.register({
  nftContract: agentNftAddress,
  tokenId: tokenId,
  metadata: agentMetadata
});
