
// Create and attach license terms for agent IP
const licenseTerms = {
  transferable: true,
  royaltyPolicy: "LAP", // License Agreement Policy
  commercialUse: true,
  commercialAttribution: true,
  derivativesAllowed: true,
  derivativesAttribution: true,
  derivativesApproval: false,
  derivativesReciprocal: true,
  currency: "0x...", // Payment token address
  uri: "ipfs://license-terms-metadata"
};

const attachResult = await client.license.attachTerms({
  ipId: agentIpId,
  licenseTerms: licenseTerms
});
