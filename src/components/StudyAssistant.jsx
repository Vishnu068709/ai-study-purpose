import React, { useState } from 'react';

const StudyAssistant = () => {
    const [query, setQuery] = useState('');
    const [resources, setResources] = useState([]);

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSearch = () => {
        // Logic to fetch study resources based on the query
        // This can be implemented using the functions from aiHelpers.js
        // For now, we'll simulate a fetch with a static response
        const fetchedResources = [
            { title: 'Cloud Engineering Basics', link: 'https://example.com/cloud-basics' },
            { title: 'Advanced Cloud Architectures', link: 'https://example.com/advanced-architectures' },
        ];
        setResources(fetchedResources);
    };

    return (
        <div className="study-assistant">
            <h2>AI Study Assistant</h2>
            <input
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder="Ask me about study resources..."
            />
            <button onClick={handleSearch}>Search</button>
            <div className="resources">
                {resources.map((resource, index) => (
                    <div key={index}>
                        <a href={resource.link} target="_blank" rel="noopener noreferrer">
                            {resource.title}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StudyAssistant;