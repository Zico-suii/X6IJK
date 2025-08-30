// JavaScript Example: Reading Entities
// Filterable fields: common_name, species_name, description, image_url, health_status, health_analysis, care_tips
async function fetchPlantEntities() {
    const response = await fetch(`https://app.base44.com/api/apps/68b16f9c26784cdd8cc7086c/entities/Plant`, {
        headers: {
            'api_key': 'e26a36dca1ff48ab89917c7ed0a91724', // or use await User.me() to get the API key
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    console.log(data);
}

// JavaScript Example: Updating an Entity
// Filterable fields: common_name, species_name, description, image_url, health_status, health_analysis, care_tips
async function updatePlantEntity(entityId, updateData) {
    const response = await fetch(`https://app.base44.com/api/apps/68b16f9c26784cdd8cc7086c/entities/Plant/${entityId}`, {
        method: 'PUT',
        headers: {
            'api_key': 'e26a36dca1ff48ab89917c7ed0a91724', // or use await User.me() to get the API key
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updateData)
    });
    const data = await response.json();
    console.log(data);
}