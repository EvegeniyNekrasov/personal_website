export default function (config) {
    config.setBrowserSyncConfig({
        files: "./dist/css/**/*.css"
    })

    return {
        markdownTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dir: {
            input: '_src',
            output: 'dist'
        }
    };
}
