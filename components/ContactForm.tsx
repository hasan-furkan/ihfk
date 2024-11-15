"use client"
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export function ContactForm() {
    const { toast } = useToast()
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)

        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            if (!response.ok) {
                throw new Error('Failed to send message')
            }

            toast({
                title: "Message Sent!",
                description: "Thank you for your message. I'll get back to you soon.",
            })

            // Reset form
            setFormData({ name: '', email: '', message: '' })
        } catch (error) {
            toast({
                title: "Error",
                description: "Failed to send message. Please try again later.",
                variant: "destructive",
            })
        } finally {
            setLoading(false)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto">
            <div>
                <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    required
                    disabled={loading}
                />
            </div>
            <div>
                <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    required
                    disabled={loading}
                />
            </div>
            <div>
                <Textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    required
                    rows={6}
                    disabled={loading}
                />
            </div>
            <Button
                type="submit"
                className="w-full"
                disabled={loading}
            >
                {loading ? 'Sending...' : 'Send Message'}
            </Button>
        </form>
    )
} 