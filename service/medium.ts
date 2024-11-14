export const getMediumPosts = async () => {
    console.log(process.env.MEDIUM_RSS_URL);
    const res = await fetch(
        `https://api.rss2json.com/v1/api.json?rss_url=${process.env.MEDIUM_RSS_URL}`
    );

    const data = await res.json();

    return data;
}