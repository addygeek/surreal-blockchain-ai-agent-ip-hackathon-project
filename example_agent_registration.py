
# Register AI Agent using Python SDK
from story_protocol_sdk import StoryClient

client = StoryClient(chain_id=1516)  # Story testnet

agent_metadata = {
    "title": "AI Trading Agent",
    "description": "Autonomous agent for DeFi trading strategies",
    "creators": [{
        "name": "Developer Name", 
        "address": "0x...",
        "contributionPercent": 100
    }],
    "aiMetadata": {
        "characterFileUrl": "ipfs://...",
        "characterFileHash": "0x..."
    },
    "ipType": "AI Agent",
    "tags": ["AI Agent", "Trading", "DeFi"]
}

result = client.ip_asset.register(
    nft_contract=agent_nft_address,
    token_id=token_id,
    metadata=agent_metadata
)
