
# Create and attach license terms using Python
license_terms = {
    "transferable": True,
    "royalty_policy": "LAP",
    "commercial_use": True,
    "commercial_attribution": True,
    "derivatives_allowed": True,
    "derivatives_attribution": True,
    "derivatives_approval": False,
    "derivatives_reciprocal": True,
    "currency": "0x...",  # Payment token address
    "uri": "ipfs://license-terms-metadata"
}

attach_result = client.license.attach_terms(
    ip_id=agent_ip_id,
    license_terms=license_terms
)
