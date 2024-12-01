import {sortByDisplayOrder} from './_src/utils/sort_by_display_order.js';

export default function (config) {
    config.setBrowserSyncConfig({
        files: './dist/css/**/*.css'
    });

    config.addCollection('posts', collection => {
        return sortByDisplayOrder(collection.getFilteredByGlob('./_src/posts/*.md')).filter(x => x.data.featured);
    });

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
