export const fetchStudyMaterials = async (topic) => {
    const response = await fetch(`https://api.example.com/study-materials?topic=${topic}`);
    if (!response.ok) {
        throw new Error('Failed to fetch study materials');
    }
    return await response.json();
};

export const processUserQuery = (query) => {
    // Simple processing logic for user queries
    const keywords = query.split(' ').map(word => word.toLowerCase());
    return keywords;
};