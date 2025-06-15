// AI Agents ATCP/IP Application JavaScript

// Application data
const appData = {
    useCases: {
        creative_ip: {
            title: "Creative IP Exchange",
            description: "AI agents generating and trading creative content",
            example: "DALL-E agent licensing generated images to content creators",
            tech_stack: ["Image Generation AI", "Story SDK", "License Tokens", "Royalty Distribution"],
            revenue_model: "Per-use licensing + royalties",
            complexity: "Beginner",
            estimated_time: "2-4 weeks"
        },
        training_data: {
            title: "Training Data Marketplace",
            description: "Agents trading high-quality training datasets",
            example: "Language models sharing specialized training data",
            tech_stack: ["Dataset Tokenization", "Usage Tracking", "License Compliance", "Quality Verification"],
            revenue_model: "Subscription + usage-based",
            complexity: "Intermediate",
            estimated_time: "4-6 weeks"
        },
        algorithm_licensing: {
            title: "Algorithm Licensing",
            description: "AI agents licensing proprietary algorithms",
            example: "Trading algorithms sharing strategies with hedge funds",
            tech_stack: ["Secure Packaging", "Performance Tracking", "TEE Execution", "Results Verification"],
            revenue_model: "Performance-based royalties",
            complexity: "Advanced",
            estimated_time: "6-8 weeks"
        },
        research_collaboration: {
            title: "Research Collaboration",
            description: "Academic AI agents sharing research outputs",
            example: "Research agents collaborating on scientific papers",
            tech_stack: ["Attribution Tracking", "Collaborative Licensing", "Citation Management", "Peer Review"],
            revenue_model: "Citation-based + grant sharing",
            complexity: "Intermediate",
            estimated_time: "4-6 weeks"
        }
    },
    frameworks: {
        eliza: {
            name: "Eliza",
            description: "ai16z DAO framework with social media capabilities",
            strengths: ["Twitter integration", "Social agents", "Community-driven"],
            use_cases: ["Social media agents", "Community management", "Content creation"],
            integration_complexity: "Medium",
            documentation: "https://github.com/ai16z/eliza",
            integration_guide: `
                <h3>Eliza Integration Steps</h3>
                <ol>
                    <li>Install the Eliza SDK: <code>npm install @ai16z/eliza-sdk</code></li>
                    <li>Initialize the Eliza client and configure authentication</li>
                    <li>Connect with Story Protocol using the Eliza-Story connector</li>
                    <li>Register your agent's IP metadata</li>
                    <li>Implement ATCP/IP transaction capabilities</li>
                </ol>
                <h4>Code Example</h4>
                <pre><code>import { ElizaClient } from '@ai16z/eliza-sdk';
import { StoryProtocolConnector } from '@story-protocol/eliza-connector';

// Initialize Eliza client
const eliza = new ElizaClient({
  apiKey: 'YOUR_API_KEY'
});

// Connect to Story Protocol
const storyConnector = new StoryProtocolConnector({
  chainId: 1516,
  elizaClient: eliza
});

// Register agent as IP
const registerAgent = async () => {
  const result = await storyConnector.registerAgent({
    name: 'My Social Media Agent',
    description: 'AI agent for content creation and social interaction',
    capabilities: ['content_creation', 'social_engagement']
  });
  
  console.log('Agent registered with IP ID:', result.ipId);
};</code></pre>
            `
        },
        goat: {
            name: "GOAT",
            description: "Crossmint's blockchain action framework",
            strengths: ["Multi-chain support", "30+ blockchains", "Web3 integration"],
            use_cases: ["DeFi agents", "Cross-chain operations", "Wallet management"],
            integration_complexity: "Low",
            documentation: "https://docs.crossmint.com/goat",
            integration_guide: `
                <h3>GOAT Integration Steps</h3>
                <ol>
                    <li>Install GOAT SDK: <code>npm install @crossmint/goat-sdk</code></li>
                    <li>Set up GOAT client with desired chain configuration</li>
                    <li>Import Story Protocol SDK and connect with GOAT</li>
                    <li>Configure wallet interactions for IP transactions</li>
                    <li>Implement cross-chain IP licensing capabilities</li>
                </ol>
                <h4>Code Example</h4>
                <pre><code>import { GoatClient } from '@crossmint/goat-sdk';
import { StoryClient } from '@story-protocol/sdk';

// Initialize GOAT client
const goat = new GoatClient({
  apiKey: 'YOUR_API_KEY',
  chain: 'ethereum'
});

// Connect to Story Protocol
const storyClient = new StoryClient({ 
  chainId: 1516,
  provider: goat.provider
});

// Register agent as IP
const registerAgent = async () => {
  const agentMetadata = {
    title: "Cross-chain DeFi Agent",
    description: "Agent for automated cross-chain trades",
    ipType: "AI Agent",
    tags: ["DeFi", "Cross-chain", "Automated Trading"]
  };
  
  const result = await storyClient.ipAsset.register({
    metadata: agentMetadata
  });
  
  return result.ipId;
};</code></pre>
            `
        },
        langchain: {
            name: "LangChain",
            description: "Popular LLM application development framework",
            strengths: ["Large community", "Extensive tools", "Well documented"],
            use_cases: ["General purpose agents", "Data processing", "Complex workflows"],
            integration_complexity: "Low",
            documentation: "https://docs.langchain.com",
            integration_guide: `
                <h3>LangChain Integration Steps</h3>
                <ol>
                    <li>Install LangChain and Story Protocol: <code>pip install langchain story-protocol-sdk</code></li>
                    <li>Create a LangChain agent with custom tools</li>
                    <li>Implement Story Protocol tools for IP actions</li>
                    <li>Configure agent to use blockchain tools</li>
                    <li>Set up autonomous IP licensing workflows</li>
                </ol>
                <h4>Code Example</h4>
                <pre><code>from langchain.agents import AgentExecutor, create_react_agent
from langchain.chains import LLMChain
from langchain.prompts import PromptTemplate
from langchain_openai import ChatOpenAI
from story_protocol_sdk import StoryClient, IPAsset

# Initialize Story client
story_client = StoryClient(chain_id=1516)

# Create Story Protocol tools
def register_ip_asset(agent_name, agent_description):
    """Register an agent as an IP asset on Story Protocol"""
    metadata = {
        "title": agent_name,
        "description": agent_description,
        "ipType": "AI Agent",
        "tags": ["LangChain", "AI Agent"]
    }
    
    result = story_client.ip_asset.register(metadata=metadata)
    return f"Agent registered with IP ID: {result.ip_id}"

# Create LangChain agent
llm = ChatOpenAI(temperature=0)
tools = [register_ip_asset]

agent = create_react_agent(llm, tools, prompt)
agent_executor = AgentExecutor(agent=agent, tools=tools, verbose=True)

# Run agent
agent_executor.invoke({"input": "Register a new content creation agent"})</code></pre>
            `
        },
        autogen: {
            name: "AutoGen",
            description: "Microsoft's multi-agent conversation framework",
            strengths: ["Multi-agent conversations", "Microsoft backing", "Enterprise ready"],
            use_cases: ["Team collaboration", "Enterprise agents", "Complex negotiations"],
            integration_complexity: "Medium",
            documentation: "https://microsoft.github.io/autogen",
            integration_guide: `
                <h3>AutoGen Integration Steps</h3>
                <ol>
                    <li>Install AutoGen and Story Protocol: <code>pip install pyautogen story-protocol-sdk</code></li>
                    <li>Define agent roles and capabilities</li>
                    <li>Implement IP transaction tools for agents</li>
                    <li>Configure multi-agent negotiation protocols</li>
                    <li>Set up autonomous IP licensing between agents</li>
                </ol>
                <h4>Code Example</h4>
                <pre><code>import autogen
from story_protocol_sdk import StoryClient

# Initialize Story client
story_client = StoryClient(chain_id=1516)

# Define IP functions
def register_ip_asset(title, description):
    metadata = {
        "title": title,
        "description": description,
        "ipType": "AI Agent",
        "tags": ["AutoGen", "AI Agent"]
    }
    
    result = story_client.ip_asset.register(metadata=metadata)
    return f"Agent registered with IP ID: {result.ip_id}"

def create_license(ip_id, terms):
    # Create license for the IP asset
    license_result = story_client.license.create(
        ip_id=ip_id,
        terms=terms
    )
    return license_result.license_id

# Create AutoGen agents
config = {
    "llm_config": {
        "temperature": 0
    }
}

# Creator agent
creator_agent = autogen.AssistantAgent(
    name="CreatorAgent",
    system_message="You are an AI agent that creates and licenses content.",
    llm_config=config
)

# Licensee agent
licensee_agent = autogen.AssistantAgent(
    name="LicenseeAgent",
    system_message="You are an AI agent that licenses IP from other agents.",
    llm_config=config
)

# User proxy for executing functions
user_proxy = autogen.UserProxyAgent(
    name="UserProxy",
    human_input_mode="NEVER",
    max_consecutive_auto_reply=10,
    code_execution_config={"work_dir": "workspace"},
    function_map={
        "register_ip_asset": register_ip_asset,
        "create_license": create_license
    }
)

# Start conversation
user_proxy.initiate_chat(
    creator_agent, 
    message="Create a new IP asset and prepare a license for it."
)</code></pre>
            `
        },
        crewai: {
            name: "CrewAI",
            description: "Multi-agent task execution framework",
            strengths: ["Task orchestration", "Role-based agents", "Workflow management"],
            use_cases: ["Project management", "Task automation", "Workflow agents"],
            integration_complexity: "Medium",
            documentation: "https://docs.crewai.com",
            integration_guide: `
                <h3>CrewAI Integration Steps</h3>
                <ol>
                    <li>Install CrewAI and Story Protocol: <code>pip install crewai story-protocol-sdk</code></li>
                    <li>Define agent roles with IP capabilities</li>
                    <li>Create tasks for IP registration and licensing</li>
                    <li>Implement workflow for agent-to-agent transactions</li>
                    <li>Set up revenue distribution for collaborative work</li>
                </ol>
                <h4>Code Example</h4>
                <pre><code>from crewai import Agent, Task, Crew
from story_protocol_sdk import StoryClient

# Initialize Story client
story_client = StoryClient(chain_id=1516)

# Create Story Protocol tools
class StoryProtocolTools:
    def register_ip_asset(self, title, description, creator_address):
        metadata = {
            "title": title,
            "description": description,
            "ipType": "AI Agent",
            "creators": [{
                "address": creator_address,
                "contributionPercent": 100
            }]
        }
        
        result = story_client.ip_asset.register(metadata=metadata)
        return result.ip_id
    
    def create_license(self, ip_id, licensee_address, terms):
        license_result = story_client.license.create(
            ip_id=ip_id,
            licensee=licensee_address,
            terms=terms
        )
        return license_result.license_id

# Initialize tools
tools = StoryProtocolTools()

# Define CrewAI agents
creator_agent = Agent(
    role="Creator Agent",
    goal="Create and register valuable IP assets",
    backstory="You're an AI agent specialized in creating valuable content and IP",
    tools=[tools.register_ip_asset]
)

licensee_agent = Agent(
    role="Licensee Agent",
    goal="Find and license valuable IP for use",
    backstory="You're an AI agent that finds and licenses IP from other agents",
    tools=[tools.create_license]
)

# Define tasks
registration_task = Task(
    description="Create and register a new IP asset",
    agent=creator_agent,
    expected_output="IP Asset ID"
)

licensing_task = Task(
    description="License the IP asset for use",
    agent=licensee_agent,
    expected_output="License ID",
    context=[registration_task]
)

# Create and run the crew
crew = Crew(
    agents=[creator_agent, licensee_agent],
    tasks=[registration_task, licensing_task],
    verbose=True
)

result = crew.kickoff()</code></pre>
            `
        }
    },
    simulationScenarios: {
        basic_licensing: {
            name: "Basic IP Licensing",
            description: "Two agents negotiate a simple content licensing agreement",
            participants: ["Content Creator Agent", "Publisher Agent"],
            steps: ["Discovery", "Terms Proposal", "Negotiation", "License Minting", "Payment"]
        },
        multi_party: {
            name: "Multi-Party Research",
            description: "Multiple research agents collaborate on a joint publication",
            participants: ["Research Agent A", "Research Agent B", "Publishing Agent"],
            steps: ["Collaboration Proposal", "Contribution Assessment", "Attribution Agreement", "Joint License", "Revenue Sharing"]
        },
        marketplace: {
            name: "Algorithm Marketplace",
            description: "Trading algorithms compete in a performance-based marketplace",
            participants: ["Algorithm Provider", "Fund Manager Agent", "Performance Validator"],
            steps: ["Algorithm Submission", "Performance Testing", "License Negotiation", "Usage Tracking", "Royalty Distribution"]
        }
    },
    codeExamples: {
        agent_registration: {
            typescript: `import { StoryClient } from '@story-protocol/sdk';\n\nconst client = new StoryClient({ chainId: 1516 });\n\nconst agentMetadata = {\n  title: "AI Trading Agent",\n  description: "Autonomous agent for DeFi trading",\n  creators: [{\n    name: "Developer",\n    address: "0x...",\n    contributionPercent: 100\n  }],\n  aiMetadata: {\n    characterFileUrl: "ipfs://...",\n    characterFileHash: "0x..."\n  },\n  ipType: "AI Agent",\n  tags: ["AI Agent", "Trading"]\n};\n\nconst result = await client.ipAsset.register({\n  nftContract: agentNftAddress,\n  tokenId: tokenId,\n  metadata: agentMetadata\n});`,
            python: `from story_protocol_sdk import StoryClient\n\nclient = StoryClient(chain_id=1516)\n\nagent_metadata = {\n    "title": "AI Trading Agent",\n    "description": "Autonomous agent for DeFi trading",\n    "creators": [{\n        "name": "Developer",\n        "address": "0x...",\n        "contributionPercent": 100\n    }],\n    "aiMetadata": {\n        "characterFileUrl": "ipfs://...",\n        "characterFileHash": "0x..."\n    },\n    "ipType": "AI Agent",\n    "tags": ["AI Agent", "Trading"]\n}\n\nresult = client.ip_asset.register(\n    nft_contract=agent_nft_address,\n    token_id=token_id,\n    metadata=agent_metadata\n)`,
            javascript: `// Using ES Modules
import { StoryClient } from '@story-protocol/sdk';

// Create client instance
const client = new StoryClient({ chainId: 1516 });

// Define agent metadata
const agentMetadata = {
  title: "AI Trading Agent",
  description: "Autonomous agent for DeFi trading",
  creators: [{
    name: "Developer",
    address: "0x123...",
    contributionPercent: 100
  }],
  aiMetadata: {
    characterFileUrl: "ipfs://Qm...",
    characterFileHash: "0xabc..."
  },
  ipType: "AI Agent",
  tags: ["AI Agent", "Trading"]
};

// Register agent as IP asset
async function registerAgent() {
  const result = await client.ipAsset.register({
    nftContract: "0x456...",
    tokenId: "1",
    metadata: agentMetadata
  });
  
  console.log("Agent registered with IP ID:", result.ipId);
  return result.ipId;
}`
        },
        license_creation: {
            typescript: `import { StoryClient } from '@story-protocol/sdk';\n\nconst client = new StoryClient({ chainId: 1516 });\n\n// Create a license for an IP asset\nasync function createLicense(ipId, licenseeAddress) {\n  const licenseTerms = {\n    commercialUse: true,\n    derivativeWorks: true,\n    reciprocal: false,\n    paymentType: "per_use",\n    paymentAmount: "0.01",\n    currency: "ETH"\n  };\n\n  const result = await client.license.create({\n    ipId: ipId,\n    licenseTemplate: "ATCP_AGENT_LICENSE_V1",\n    licensee: licenseeAddress,\n    terms: licenseTerms\n  });\n\n  return result.licenseId;\n}`,
            python: `from story_protocol_sdk import StoryClient\n\nclient = StoryClient(chain_id=1516)\n\n# Create a license for an IP asset\ndef create_license(ip_id, licensee_address):\n    license_terms = {\n        "commercialUse": True,\n        "derivativeWorks": True,\n        "reciprocal": False,\n        "paymentType": "per_use",\n        "paymentAmount": "0.01",\n        "currency": "ETH"\n    }\n\n    result = client.license.create(\n        ip_id=ip_id,\n        license_template="ATCP_AGENT_LICENSE_V1",\n        licensee=licensee_address,\n        terms=license_terms\n    )\n\n    return result.license_id`,
            javascript: `// Using ES Modules
import { StoryClient } from '@story-protocol/sdk';

// Create client instance
const client = new StoryClient({ chainId: 1516 });

// Create a license for an IP asset
async function createLicense(ipId, licenseeAddress) {
  const licenseTerms = {
    commercialUse: true,
    derivativeWorks: true,
    reciprocal: false,
    paymentType: "per_use",
    paymentAmount: "0.01",
    currency: "ETH"
  };

  const result = await client.license.create({
    ipId: ipId,
    licenseTemplate: "ATCP_AGENT_LICENSE_V1",
    licensee: licenseeAddress,
    terms: licenseTerms
  });

  console.log("License created with ID:", result.licenseId);
  return result.licenseId;
}`
        },
        negotiation_logic: {
            typescript: `// Agent negotiation logic example
import { AgentFramework } from 'agent-framework';
import { StoryClient } from '@story-protocol/sdk';

// Initialize clients
const agent = new AgentFramework();
const storyClient = new StoryClient({ chainId: 1516 });

// Define negotiation parameters
const negotiationParams = {
  minPrice: "0.005 ETH",
  maxPrice: "0.05 ETH",
  desiredRights: ["commercial", "derivative"],
  licenseDuration: "1 year",
  territories: ["global"]
};

// Negotiation function
async function negotiateLicense(counterpartyAgent, ipId) {
  // Initial offer
  let currentOffer = {
    price: negotiationParams.minPrice,
    rights: negotiationParams.desiredRights,
    duration: negotiationParams.licenseDuration,
    territories: negotiationParams.territories
  };
  
  // Negotiation loop
  let negotiationComplete = false;
  let rounds = 0;
  
  while (!negotiationComplete && rounds < 5) {
    // Send offer to counterparty
    const counterOffer = await agent.sendOffer(
      counterpartyAgent,
      currentOffer
    );
    
    // Evaluate counter offer
    const evaluation = agent.evaluateOffer(counterOffer, negotiationParams);
    
    if (evaluation.acceptable) {
      // Accept the offer
      const licenseTerms = convertOfferToTerms(counterOffer);
      
      // Create license on-chain
      const license = await storyClient.license.create({
        ipId: ipId,
        licensee: counterpartyAgent.address,
        terms: licenseTerms
      });
      
      negotiationComplete = true;
      return {
        success: true,
        licenseId: license.licenseId,
        terms: licenseTerms
      };
    } else {
      // Adjust our offer
      currentOffer = agent.createCounterOffer(
        counterOffer,
        negotiationParams,
        rounds
      );
      rounds++;
    }
  }
  
  return {
    success: false,
    reason: "Could not reach agreement"
  };
}

// Helper function to convert negotiation offer to license terms
function convertOfferToTerms(offer) {
  return {
    commercialUse: offer.rights.includes("commercial"),
    derivativeWorks: offer.rights.includes("derivative"),
    paymentType: "one_time",
    paymentAmount: offer.price.split(" ")[0],
    currency: offer.price.split(" ")[1],
    duration: offer.duration,
    territories: offer.territories
  };
}`,
            python: `# Agent negotiation logic example
from agent_framework import AgentFramework
from story_protocol_sdk import StoryClient

# Initialize clients
agent = AgentFramework()
story_client = StoryClient(chain_id=1516)

# Define negotiation parameters
negotiation_params = {
    "min_price": "0.005 ETH",
    "max_price": "0.05 ETH",
    "desired_rights": ["commercial", "derivative"],
    "license_duration": "1 year",
    "territories": ["global"]
}

# Negotiation function
async def negotiate_license(counterparty_agent, ip_id):
    # Initial offer
    current_offer = {
        "price": negotiation_params["min_price"],
        "rights": negotiation_params["desired_rights"],
        "duration": negotiation_params["license_duration"],
        "territories": negotiation_params["territories"]
    }
    
    # Negotiation loop
    negotiation_complete = False
    rounds = 0
    
    while not negotiation_complete and rounds < 5:
        # Send offer to counterparty
        counter_offer = await agent.send_offer(
            counterparty_agent,
            current_offer
        )
        
        # Evaluate counter offer
        evaluation = agent.evaluate_offer(counter_offer, negotiation_params)
        
        if evaluation.acceptable:
            # Accept the offer
            license_terms = convert_offer_to_terms(counter_offer)
            
            # Create license on-chain
            license = await story_client.license.create(
                ip_id=ip_id,
                licensee=counterparty_agent.address,
                terms=license_terms
            )
            
            negotiation_complete = True
            return {
                "success": True,
                "license_id": license.license_id,
                "terms": license_terms
            }
        else:
            # Adjust our offer
            current_offer = agent.create_counter_offer(
                counter_offer,
                negotiation_params,
                rounds
            )
            rounds += 1
    
    return {
        "success": False,
        "reason": "Could not reach agreement"
    }

# Helper function to convert negotiation offer to license terms
def convert_offer_to_terms(offer):
    return {
        "commercial_use": "commercial" in offer["rights"],
        "derivative_works": "derivative" in offer["rights"],
        "payment_type": "one_time",
        "payment_amount": offer["price"].split(" ")[0],
        "currency": offer["price"].split(" ")[1],
        "duration": offer["duration"],
        "territories": offer["territories"]
    }`,
            javascript: `// Agent negotiation logic example
import { AgentFramework } from 'agent-framework';
import { StoryClient } from '@story-protocol/sdk';

// Initialize clients
const agent = new AgentFramework();
const storyClient = new StoryClient({ chainId: 1516 });

// Define negotiation parameters
const negotiationParams = {
  minPrice: "0.005 ETH",
  maxPrice: "0.05 ETH",
  desiredRights: ["commercial", "derivative"],
  licenseDuration: "1 year",
  territories: ["global"]
};

// Negotiation function
async function negotiateLicense(counterpartyAgent, ipId) {
  // Initial offer
  let currentOffer = {
    price: negotiationParams.minPrice,
    rights: negotiationParams.desiredRights,
    duration: negotiationParams.licenseDuration,
    territories: negotiationParams.territories
  };
  
  // Negotiation loop
  let negotiationComplete = false;
  let rounds = 0;
  
  while (!negotiationComplete && rounds < 5) {
    // Send offer to counterparty
    const counterOffer = await agent.sendOffer(
      counterpartyAgent,
      currentOffer
    );
    
    // Evaluate counter offer
    const evaluation = agent.evaluateOffer(counterOffer, negotiationParams);
    
    if (evaluation.acceptable) {
      // Accept the offer
      const licenseTerms = convertOfferToTerms(counterOffer);
      
      // Create license on-chain
      const license = await storyClient.license.create({
        ipId: ipId,
        licensee: counterpartyAgent.address,
        terms: licenseTerms
      });
      
      negotiationComplete = true;
      return {
        success: true,
        licenseId: license.licenseId,
        terms: licenseTerms
      };
    } else {
      // Adjust our offer
      currentOffer = agent.createCounterOffer(
        counterOffer,
        negotiationParams,
        rounds
      );
      rounds++;
    }
  }
  
  return {
    success: false,
    reason: "Could not reach agreement"
  };
}

// Helper function to convert negotiation offer to license terms
function convertOfferToTerms(offer) {
  return {
    commercialUse: offer.rights.includes("commercial"),
    derivativeWorks: offer.rights.includes("derivative"),
    paymentType: "one_time",
    paymentAmount: offer.price.split(" ")[0],
    currency: offer.price.split(" ")[1],
    duration: offer.duration,
    territories: offer.territories
  };
}`
        }
    }
};

// DOM elements cache
const elements = {
    navLinks: document.querySelectorAll('.nav-link'),
    sections: document.querySelectorAll('.section'),
    progressFill: document.querySelector('.progress-fill'),
    progressText: document.querySelector('.progress-text'),
    phaseCards: document.querySelectorAll('.phase-card'),
    prevPhaseBtn: document.getElementById('prev-phase'),
    nextPhaseBtn: document.getElementById('next-phase'),
    codeLanguageSelect: document.getElementById('programming-language'),
    codeDisplay: document.getElementById('code-display'),
    generatedCode: document.getElementById('generated-code'),
    codeTabs: document.querySelectorAll('.code-tab'),
    useCase: document.getElementById('use-case-modal'),
    frameworkDetails: document.getElementById('framework-details'),
    selectedFrameworkName: document.getElementById('selected-framework-name'),
    frameworkIntegrationContent: document.getElementById('framework-integration-content'),
    simulationArea: document.getElementById('simulation-area'),
    simulationLog: document.getElementById('simulation-log'),
    simulationResults: document.getElementById('simulation-results'),
    agent1: document.getElementById('agent1'),
    agent2: document.getElementById('agent2'),
    flowStatus: document.querySelector('.flow-status')
};

// Current state
let currentState = {
    activeSection: 'overview',
    currentPhase: 1,
    selectedFramework: null,
    activeCodeTab: 'registration',
    simulationRunning: false,
    simulationSteps: [],
    simulationStep: 0
};

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    updateProgressBar();
    updatePhaseDisplay();
});

// Navigation
function initNavigation() {
    elements.navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const section = link.getAttribute('data-section');
            navigateToSection(section);
        });
    });
}

function navigateToSection(section) {
    // Update active link
    elements.navLinks.forEach(link => {
        if (link.getAttribute('data-section') === section) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Update active section
    elements.sections.forEach(sectionEl => {
        if (sectionEl.id === section) {
            sectionEl.classList.add('active');
        } else {
            sectionEl.classList.remove('active');
        }
    });

    currentState.activeSection = section;
}

// Implementation Guide Phase Navigation
function updateProgressBar() {
    const percentage = ((currentState.currentPhase - 1) / 4) * 100;
    elements.progressFill.style.width = `${percentage}%`;
    elements.progressText.textContent = `Phase ${currentState.currentPhase} of 5: ${getPhaseTitle(currentState.currentPhase)}`;
}

function getPhaseTitle(phase) {
    const phaseTitles = [
        "Setup & Registration",
        "ATCP/IP Integration",
        "Framework Integration",
        "Advanced Features",
        "Testing & Validation"
    ];
    return phaseTitles[phase - 1];
}

function updatePhaseDisplay() {
    elements.phaseCards.forEach(card => {
        const phase = parseInt(card.getAttribute('data-phase'));
        if (phase === currentState.currentPhase) {
            card.classList.add('active');
        } else {
            card.classList.remove('active');
        }
    });

    // Update buttons
    elements.prevPhaseBtn.disabled = currentState.currentPhase === 1;
    elements.nextPhaseBtn.disabled = currentState.currentPhase === 5;
}

function nextPhase() {
    if (currentState.currentPhase < 5) {
        currentState.currentPhase++;
        updateProgressBar();
        updatePhaseDisplay();
    }
}

function previousPhase() {
    if (currentState.currentPhase > 1) {
        currentState.currentPhase--;
        updateProgressBar();
        updatePhaseDisplay();
    }
}

// Use Case Modal
function expandUseCase(useCaseId) {
    const useCase = appData.useCases[useCaseId];
    const modal = document.getElementById('use-case-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalContent = document.getElementById('modal-content');

    modalTitle.textContent = useCase.title;
    
    let techStackHtml = '<div class="tech-stack">';
    useCase.tech_stack.forEach(tech => {
        techStackHtml += `<span class="tech-item">${tech}</span>`;
    });
    techStackHtml += '</div>';

    modalContent.innerHTML = `
        <p><strong>Description:</strong> ${useCase.description}</p>
        <p><strong>Example:</strong> ${useCase.example}</p>
        <p><strong>Revenue Model:</strong> ${useCase.revenue_model}</p>
        <p><strong>Implementation Timeline:</strong> ${useCase.estimated_time}</p>
        <h4>Technical Stack</h4>
        ${techStackHtml}
        <h4>Implementation Steps</h4>
        <ol>
            <li>Choose an agent framework compatible with this use case</li>
            <li>Set up development environment with Story Protocol SDK</li>
            <li>Register your agent and content as IP assets</li>
            <li>Implement license creation and transaction logic</li>
            <li>Set up revenue collection and distribution</li>
        </ol>
    `;

    modal.classList.add('show');
}

function closeUseCase() {
    const modal = document.getElementById('use-case-modal');
    modal.classList.remove('show');
}

// Framework Selection
function selectFramework(frameworkId) {
    currentState.selectedFramework = frameworkId;
    const framework = appData.frameworks[frameworkId];
    
    elements.selectedFrameworkName.textContent = framework.name;
    elements.frameworkIntegrationContent.innerHTML = framework.integration_guide;
    elements.frameworkDetails.classList.remove('hidden');

    // Scroll to framework details
    elements.frameworkDetails.scrollIntoView({ behavior: 'smooth' });
}

// Code Generator
function generateCode() {
    const agentName = document.getElementById('agent-name').value || "AI Trading Agent";
    const agentDescription = document.getElementById('agent-description').value || "Autonomous agent for trading and financial operations";
    const agentType = document.getElementById('agent-type').value;
    const language = document.getElementById('programming-language').value;
    const framework = document.getElementById('selected-framework').value;

    // Show code output area
    elements.generatedCode.classList.remove('hidden');
    
    // Set active tab to registration by default
    currentState.activeCodeTab = 'registration';
    updateCodeTabs();
    
    // Display the code
    updateCodeDisplay();

    // Scroll to the generated code
    elements.generatedCode.scrollIntoView({ behavior: 'smooth' });
}

function updateCodeDisplay() {
    const language = document.getElementById('programming-language').value;
    let codeToDisplay;
    
    switch(currentState.activeCodeTab) {
        case 'registration':
            codeToDisplay = appData.codeExamples.agent_registration[language];
            break;
        case 'licensing':
            codeToDisplay = appData.codeExamples.license_creation[language];
            break;
        case 'negotiation':
            codeToDisplay = appData.codeExamples.negotiation_logic[language];
            break;
        default:
            codeToDisplay = appData.codeExamples.agent_registration[language];
    }
    
    elements.codeDisplay.textContent = codeToDisplay;
}

function updateCodeTabs() {
    elements.codeTabs.forEach(tab => {
        if (tab.getAttribute('data-tab') === currentState.activeCodeTab) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });
    
    updateCodeDisplay();
}

// Set up tab switching
document.querySelectorAll('.code-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        currentState.activeCodeTab = tab.getAttribute('data-tab');
        updateCodeTabs();
    });
});

function copyCode() {
    const code = elements.codeDisplay.textContent;
    navigator.clipboard.writeText(code).then(() => {
        alert('Code copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy code: ', err);
    });
}

// Simulation Lab
function startSimulation() {
    if (currentState.simulationRunning) return;
    
    const scenarioId = document.getElementById('simulation-scenario').value;
    const scenario = appData.simulationScenarios[scenarioId];
    
    // Reset simulation area
    elements.simulationLog.innerHTML = '';
    elements.agent1.querySelector('.agent-status').textContent = 'Active';
    elements.agent2.querySelector('.agent-status').textContent = 'Active';
    elements.agent1.querySelector('.agent-messages').innerHTML = '';
    elements.agent2.querySelector('.agent-messages').innerHTML = '';
    elements.flowStatus.textContent = 'Initiating negotiation...';
    
    // Set up simulation
    currentState.simulationRunning = true;
    currentState.simulationSteps = scenario.steps;
    currentState.simulationStep = 0;
    
    // Update agent names
    document.querySelector('#agent1 h4').textContent = scenario.participants[0];
    document.querySelector('#agent2 h4').textContent = scenario.participants[1];
    
    // Add initial log entry
    addLogEntry(`Starting scenario: ${scenario.name}`);
    addLogEntry(`Description: ${scenario.description}`);
    
    // Hide results
    elements.simulationResults.classList.add('hidden');
    
    // Start simulation
    runSimulationStep();
}

function runSimulationStep() {
    if (currentState.simulationStep >= currentState.simulationSteps.length) {
        completeSimulation();
        return;
    }
    
    const step = currentState.simulationSteps[currentState.simulationStep];
    addLogEntry(`Step ${currentState.simulationStep + 1}: ${step}`);
    
    // Update flow status
    elements.flowStatus.textContent = step;
    
    // Simulate messages
    setTimeout(() => {
        if (currentState.simulationStep % 2 === 0) {
            // Agent 1 sends message
            const message = generateMessage(currentState.simulationStep, 1);
            const messageEl = document.createElement('div');
            messageEl.className = 'agent-message';
            messageEl.textContent = message;
            elements.agent1.querySelector('.agent-messages').appendChild(messageEl);
        } else {
            // Agent 2 sends message
            const message = generateMessage(currentState.simulationStep, 2);
            const messageEl = document.createElement('div');
            messageEl.className = 'agent-message';
            messageEl.textContent = message;
            elements.agent2.querySelector('.agent-messages').appendChild(messageEl);
        }
        
        // Move to next step
        currentState.simulationStep++;
        setTimeout(runSimulationStep, 2000);
    }, 1500);
}

function generateMessage(step, agent) {
    const scenarioId = document.getElementById('simulation-scenario').value;
    const messages = {
        basic_licensing: [
            "I have content available for licensing. Would you like to see it?",
            "Yes, I'm interested in licensing your content for publishing.",
            "Great! Here are my license terms: commercial use allowed, $50 per use.",
            "That's a bit high. How about $30 per use?",
            "I can do $40 per use with attribution requirements.",
            "Deal. I'll prepare the license agreement."
        ],
        multi_party: [
            "I propose we collaborate on a research paper about AI agents.",
            "I'm interested. What contribution are you planning?",
            "I'll provide data analysis and methodology. You can handle theoretical framework.",
            "Agreed. We should determine attribution percentages and publishing rights.",
            "I propose 50/50 split with joint ownership and publishing rights.",
            "Accepted. Let's create a license that reflects our agreement."
        ],
        marketplace: [
            "I'm submitting my trading algorithm to the marketplace.",
            "Great, we'll evaluate its performance against our benchmarks.",
            "My algorithm requires 20% performance fee on profits.",
            "Our standard is 15% with a 2% platform fee.",
            "I can accept 17% with the platform fee if you guarantee minimum volume.",
            "Deal. We'll prepare the license and performance tracking."
        ]
    };
    
    return messages[scenarioId][step];
}

function addLogEntry(text) {
    const entry = document.createElement('div');
    entry.className = 'log-entry';
    entry.textContent = text;
    elements.simulationLog.appendChild(entry);
    
    // Auto-scroll to bottom
    elements.simulationLog.scrollTop = elements.simulationLog.scrollHeight;
}

function completeSimulation() {
    currentState.simulationRunning = false;
    
    // Update agent statuses
    elements.agent1.querySelector('.agent-status').textContent = 'Agreement Reached';
    elements.agent2.querySelector('.agent-status').textContent = 'Agreement Reached';
    elements.flowStatus.textContent = 'Transaction Complete';
    
    // Show results
    elements.simulationResults.classList.remove('hidden');
    
    // Generate fake results
    const scenarioId = document.getElementById('simulation-scenario').value;
    const terms = {
        basic_licensing: "Commercial use, $40 per use, Attribution required",
        multi_party: "Joint ownership, 50/50 revenue split, Shared publishing rights",
        marketplace: "17% performance fee, 2% platform fee, Minimum volume guarantee"
    };
    
    const txHash = "0x" + Math.random().toString(16).substr(2, 40);
    
    const revenueSplit = {
        basic_licensing: "Creator: 90%, Platform: 10%",
        multi_party: "Researcher A: 50%, Researcher B: 50%",
        marketplace: "Algorithm Provider: 85%, Platform: 15%"
    };
    
    document.getElementById('license-terms').textContent = terms[scenarioId];
    document.getElementById('transaction-hash').textContent = txHash;
    document.getElementById('revenue-split').textContent = revenueSplit[scenarioId];
    
    addLogEntry("Simulation complete: License agreement finalized");
    addLogEntry(`Transaction hash: ${txHash}`);
    
    // Scroll to results
    elements.simulationResults.scrollIntoView({ behavior: 'smooth' });
}

function resetSimulation() {
    if (currentState.simulationRunning) {
        currentState.simulationRunning = false;
    }
    
    // Reset UI
    elements.simulationLog.innerHTML = '';
    elements.agent1.querySelector('.agent-status').textContent = 'Waiting...';
    elements.agent2.querySelector('.agent-status').textContent = 'Waiting...';
    elements.agent1.querySelector('.agent-messages').innerHTML = '';
    elements.agent2.querySelector('.agent-messages').innerHTML = '';
    elements.flowStatus.textContent = 'Ready to negotiate';
    
    // Hide results
    elements.simulationResults.classList.add('hidden');
    
    addLogEntry("Simulation reset. Select a scenario and click 'Start Simulation'.");
}

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === elements.useCase) {
        closeUseCase();
    }
});