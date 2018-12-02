
module.exports = {
    pathPrefix: "/gatsby-site",
    plugins: [{
        resolve: `gatsby-plugin-typography`,
        options: {
            pathToConfigModule: `src/utils/typography.js`
        }
    }],
    
}