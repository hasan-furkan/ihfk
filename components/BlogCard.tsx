'use client'
import { motion } from 'framer-motion'
import { Card, CardHeader, CardTitle, CardContent, CardFooter, CardDescription } from '@/components/ui/card'
import Link from 'next/link'
import Image from 'next/image';

interface BlogPost {
    title: string;
    date: string;
    content: string;
    tags: string[];
    readTime: string;
    slug: string;
    thumbnail: string | null;
}

interface BlogCardProps {
    post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
    const excerpt = post.content
        .replace(/<[^>]*>/g, '')
        .slice(0, 150) + '...';

    return (
        <Link href={`/blog/${post.slug}`}>
            <Card className="h-full hover:shadow-lg transition-shadow overflow-hidden">
                {post.thumbnail && (
                    <div className="relative w-full h-48">
                        <Image
                            src={post.thumbnail}
                            alt={post.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>
                )}
                <CardHeader>
                    <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                    <CardDescription className="flex items-center gap-2">
                        <time>{post.date}</time>
                        <span>•</span>
                        <span>{post.readTime}</span>
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="line-clamp-3 text-muted-foreground">{excerpt}</p>
                </CardContent>
                <CardFooter>
                    <div className="flex gap-2 flex-wrap">
                        {post.tags.map((tag, index) => (
                            <span
                                key={index}
                                className="px-2 py-1 bg-primary/10 rounded-full text-xs"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </CardFooter>
            </Card>
        </Link>
    )
} 