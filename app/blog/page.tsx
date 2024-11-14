"use client"
import { motion } from "framer-motion"
import { BlogCard } from '@/components/BlogCard'
import { useEffect, useState } from "react"
import { getMediumPosts } from "@/service/medium"
import type { MediumPost, MediumResponse } from "@/types/medium"
import { extractFirstImage, removeFirstImage } from '@/utils/content';

export default function BlogList() {
    const [posts, setPosts] = useState<MediumPost[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    }

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                setIsLoading(true);
                const data = await getMediumPosts();
                setPosts(data.items);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to fetch posts');
            } finally {
                setIsLoading(false);
            }
        };
        fetchPosts();
    }, []);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <motion.main
            className="min-h-screen bg-background p-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold mb-8">Blog Posts</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {posts.map((post, index) => {
                        const thumbnail = extractFirstImage(post.description);
                        const description = removeFirstImage(post.description);

                        return (
                            <motion.div key={post.guid} variants={itemVariants}>
                                <BlogCard
                                    post={{
                                        title: post.title,
                                        date: new Date(post.pubDate).toLocaleDateString(),
                                        content: description,
                                        tags: post.categories,
                                        readTime: "5 min read",
                                        slug: post.guid.split('/').pop() ?? '',
                                        thumbnail: thumbnail
                                    }}
                                />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </motion.main>
    )
} 