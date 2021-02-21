module.exports = {
    someSidebar: {
        Introduction: ['doc1', 'doc2', 'doc3'],
        JavaScript: [
            'javascript/intro',
            {
                type: 'category',
                label: 'ES6',
                items: ['javascript/es6/intro', 'javascript/es6/arrowFns']
            }
        ],
        Features: ['mdx'],

    },
};
