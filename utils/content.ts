export function sanitizeContent(content: string): string {
    return content
        // Remove tracking pixel
        .replace(/<img[^>]*medium\.com\/_\/stat[^>]*>/g, '')
        // Fix escaped characters
        .replace(/\\"/g, '"')
        .replace(/\\\\/g, '\\')
        // Fix newlines in code blocks
        .replace(/<br\s*\/?>/gi, '\n')
        // Preserve code blocks
        .replace(/<pre>/g, '\n```\n')
        .replace(/<\/pre>/g, '\n```\n')
        // Preserve inline code
        .replace(/<code>/g, '`')
        .replace(/<\/code>/g, '`');
}

export function extractFirstImage(content: string): string | null {
    const imgRegex = /<img[^>]+src="([^">]+)"/;
    const match = content.match(imgRegex);
    return match ? match[1] : null;
}

export function removeFirstImage(content: string): string {
    return content.replace(/<figure>.*?<\/figure>/, '').trim();
} 