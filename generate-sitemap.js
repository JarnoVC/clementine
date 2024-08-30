const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const path = require('path');

// pagina URLs
const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/project', changefreq: 'monthly', priority: 0.8 },
];

const generateSitemap = async () => {
  const sitemap = new SitemapStream({ hostname: 'https://www.clementinedesigns.be' });

  // Create a writable stream to save the sitemap.xml file
  const writeStream = createWriteStream(path.resolve('./public/sitemap.xml'));

  // Write links to the sitemap
  links.forEach(link => sitemap.write(link));
  sitemap.end();

  // Save the sitemap
  streamToPromise(sitemap).then(sm => writeStream.write(sm));
};

generateSitemap();
