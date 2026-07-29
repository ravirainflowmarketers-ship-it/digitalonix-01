const fs = require('fs');
const https = require('https');

async function getUnsplashImage(query) {
    return new Promise((resolve, reject) => {
        const options = {
            hostname: 'unsplash.com',
            path: `/napi/search/photos?query=${encodeURIComponent(query)}&per_page=1&page=1`,
            headers: { 'User-Agent': 'Mozilla/5.0' }
        };
        https.get(options, res => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                try {
                    const json = JSON.parse(data);
                    if (json.results && json.results.length > 0) {
                        resolve(json.results[0].urls.raw);
                    } else {
                        resolve(null);
                    }
                } catch (e) {
                    resolve(null);
                }
            });
        }).on('error', () => resolve(null));
    });
}

async function main() {
    const queries = {
        'digital marketing': await getUnsplashImage('digital marketing'),
        'SEO analytics': await getUnsplashImage('SEO analytics'),
        'social media': await getUnsplashImage('social media'),
        'brand identity': await getUnsplashImage('brand identity'),
        'artificial intelligence': await getUnsplashImage('artificial intelligence'),
        'web design': await getUnsplashImage('web design'),
        'content creation': await getUnsplashImage('content creation'),
        'mobile app': await getUnsplashImage('mobile app development'),
        'team': await getUnsplashImage('creative team'),
        'office': await getUnsplashImage('modern office'),
        'business': await getUnsplashImage('business success')
    };

    console.log(queries);
}
main();
