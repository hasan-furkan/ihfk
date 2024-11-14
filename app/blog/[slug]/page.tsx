"use client"
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import rehypeSanitize from 'rehype-sanitize'
import { getMediumPosts } from "@/service/medium"
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import type { MediumPost } from "@/types/medium"
import Image from 'next/image'
import { extractFirstImage, removeFirstImage } from '@/utils/content'

export default function BlogPost({ params }: { params: { slug: string } }) {
    const [post, setPost] = useState<MediumPost | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        const fetchPost = async () => {
            try {
                setIsLoading(true);
                const data = await getMediumPosts();
                const foundPost = data.items.find((p: MediumPost) => p.guid.split('/').pop() === params.slug);
                if (!foundPost) {
                    throw new Error('Post not found');
                }
                setPost(foundPost);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to fetch post');
            } finally {
                setIsLoading(false);
            }
        };
        fetchPost();
    }, [params.slug]);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!post) return <div>Post not found</div>;

    const thumbnail = extractFirstImage(post.description);
    const content = removeFirstImage(post.content);

    return (
        <motion.main
            className="min-h-screen bg-background p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="max-w-4xl mx-auto">
                <Button
                    variant="ghost"
                    className="mb-8"
                    onClick={() => router.back()}
                >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Blog
                </Button>

                <article className="prose dark:prose-invert max-w-none">
                    <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

                    <div className="flex gap-4 text-muted-foreground mb-8">
                        <time>{new Date(post.pubDate).toLocaleDateString()}</time>
                        <div>By {post.author}</div>
                    </div>

                    {thumbnail && (
                        <div className="relative w-full h-[400px] mb-8">
                            <Image
                                src={thumbnail}
                                alt={post.title}
                                fill
                                className="object-cover rounded-lg"
                                priority
                                sizes="(max-width: 1200px) 100vw, 1200px"
                                onError={(e) => {
                                    // Try to fallback to a different size or format
                                    const imgElement = e.target as HTMLImageElement;
                                    if (imgElement.src.includes('/max/1024/')) {
                                        imgElement.src = imgElement.src.replace('/max/1024/', '/max/800/');
                                    }
                                }}
                            />
                        </div>
                    )}

                    <div className="blog-content">
                        <ReactMarkdown
                            rehypePlugins={[rehypeRaw, rehypeSanitize]}
                            components={{
                                pre: ({ node, ...props }) => (
                                    <pre className="bg-muted p-4 rounded-lg overflow-x-auto" {...props} />
                                ),
                                code: ({ node, inline, ...props }: { node?: any, inline?: boolean } & React.HTMLProps<HTMLElement>) => (
                                    inline ?
                                        <code className="bg-muted px-1.5 py-0.5 rounded text-sm" {...props} /> :
                                        <code {...props} />
                                ),
                                p: ({ node, ...props }) => (
                                    <p className="my-4" {...props} />
                                ),
                                strong: ({ node, ...props }) => (
                                    <strong className="font-bold" {...props} />
                                ),
                                a: ({ node, ...props }) => (
                                    <a className="text-primary hover:underline" {...props} />
                                ),
                            }}
                        >
                            {content}
                        </ReactMarkdown>
                    </div>

                    <div className="flex gap-2 mt-8">
                        {post.categories.map((tag, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 bg-primary/10 rounded-full text-sm"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </article>
            </div>
        </motion.main>
    )
} 