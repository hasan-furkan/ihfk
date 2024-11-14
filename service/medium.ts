export const getMediumPosts = async () => {
    const res = await fetch(
        "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@hfkdev"
    );

    const data = await res.json();

    return data;
}