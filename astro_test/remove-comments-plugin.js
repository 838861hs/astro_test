// remove-comments-plugin.js
export default function removeCommentsPlugin() {
  return {
    name: 'remove-comments',
    transformIndexHtml(html) {
      return html.replace(/<!-- astro-plugin-[\s\S]*?-->/g, '');
    }
  };
}
