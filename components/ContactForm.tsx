"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MessageCircle, Send, CheckCircle, AlertCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface ContactFormProps {
  type: 'email' | 'dm'
  title: string
  description: string
  icon: React.ReactNode
}

export default function ContactForm({ type, title, description, icon }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type,
          ...formData
        })
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message')
      }
      
      setIsSubmitted(true)
      toast({
        title: "Message sent successfully!",
        description: `Your ${type} has been sent. I'll get back to you soon.`,
      })
      
      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      // Reset submitted state after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000)
      
    } catch (error) {
      console.error('Error sending message:', error)
      toast({
        title: "Error sending message",
        description: error instanceof Error ? error.message : "There was an issue sending your message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const isFormValid = formData.name && formData.email && formData.message

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="bg-[#393E46]/20 border-[#393E46] hover:border-[#00ADB5]/50 transition-colors">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-white">
            {icon}
            {title}
          </CardTitle>
          <CardDescription className="text-gray-400">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-8 text-center"
            >
              <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
              <p className="text-gray-400">Thank you for reaching out. I'll get back to you soon.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor={`${type}-name`} className="text-gray-300">Name *</Label>
                  <Input
                    id={`${type}-name`}
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="bg-[#393E46]/30 border-[#393E46] text-white placeholder:text-gray-500 focus:border-[#00ADB5]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor={`${type}-email`} className="text-gray-300">Email *</Label>
                  <Input
                    id={`${type}-email`}
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="bg-[#393E46]/30 border-[#393E46] text-white placeholder:text-gray-500 focus:border-[#00ADB5]"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor={`${type}-subject`} className="text-gray-300">Subject</Label>
                <Input
                  id={`${type}-subject`}
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  className="bg-[#393E46]/30 border-[#393E46] text-white placeholder:text-gray-500 focus:border-[#00ADB5]"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor={`${type}-message`} className="text-gray-300">Message *</Label>
                <Textarea
                  id={`${type}-message`}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or what you'd like to discuss..."
                  rows={5}
                  required
                  className="bg-[#393E46]/30 border-[#393E46] text-white placeholder:text-gray-500 focus:border-[#00ADB5] resize-none"
                />
              </div>
              <Button
                type="submit"
                disabled={!isFormValid || isSubmitting}
                className="w-full bg-[#00ADB5] hover:bg-[#00ADB5]/80 text-white disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Send className="h-4 w-4" />
                    Send {type === 'email' ? 'Email' : 'Message'}
                  </div>
                )}
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}

// Contact Cards Component
export function ContactCards() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="py-16"
    >
      <h2 className="text-2xl font-bold mb-12 text-white">Get In Touch</h2>
      <div className="grid grid-cols-1  gap-8">
        {/* <ContactForm
          type="email"
          title="Send Email"
          description="Send me an email for business inquiries, collaborations, or professional opportunities."
          icon={<Mail className="h-6 w-6" />}
        /> */}
        <ContactForm
          type="dm"
          title="Send Message"
          description="Quick message for casual conversations, feedback, questions, or just to say hello!"
          icon={<Mail className="h-6 w-6" />}
        />
      </div>
    </motion.section>
  )
}
