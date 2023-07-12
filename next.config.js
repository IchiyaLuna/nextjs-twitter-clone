/** @type {import('next').NextConfig} */
// Requires
const path = require('path');
// Config
const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
};

module.exports = nextConfig;
