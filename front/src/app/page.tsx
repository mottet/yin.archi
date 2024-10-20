import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Instagram, Linkedin, Mail } from "lucide-react"

export default function Component() {
  // const [name, setName] = useState('')
  // const [email, setEmail] = useState('')
  // const [message, setMessage] = useState('')

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault()
  //   // Here you would typically send the form data to a server
  //   console.log('Form submitted:', { name, email, message })
  //   // Reset form fields
  //   setName('')
  //   setEmail('')
  //   setMessage('')
  // }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Jocelyn Pei-Hua YIN</h1>
          <p className="text-xl mb-8">Interior Designer | Creating Beautiful Spaces</p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">My Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Card key={item}>
                <CardContent className="p-4">
                  <img
                    src={`/placeholder.svg?height=300&width=400`}
                    alt={`Project ${item}`}
                    className="w-full h-64 object-cover rounded-md mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2">Project {item}</h3>
                  <p className="text-gray-600">Brief description of the project and its unique features.</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img
              src="/placeholder.svg?height=400&width=300"
              alt="Jocelyn Yin"
              className="w-64 h-64 rounded-full object-cover"
            />
            <div className="max-w-2xl">
              <p className="text-lg mb-4">
                I'm Jane Doe, an interior designer with 5 years of experience creating beautiful and functional spaces.
                My passion lies in blending modern aesthetics with timeless elegance to create unique environments that
                reflect my clients' personalities and lifestyles.
              </p>
              <p className="text-lg mb-4">
                I specialize in residential and commercial design, with a focus on sustainable and eco-friendly solutions.
                My work has been featured in several design magazines, and I've had the pleasure of working with a diverse
                range of clients, from young professionals to established businesses.
              </p>
              <h3 className="text-xl font-semibold mb-2">Skills:</h3>
              <ul className="list-disc list-inside mb-4">
                <li>Space Planning</li>
                <li>3D Modeling and Rendering</li>
                <li>Color Theory</li>
                <li>Sustainable Design Practices</li>
                <li>Project Management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section
      <section className="py-20">
        <div className="container mx-auto max-w-md">
          <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <Input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <Button type="submit" className="w-full">Send Message</Button>
          </form>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto flex justify-center space-x-6">
          <a href="#" className="hover:text-secondary">
            <Instagram className="h-6 w-6" />
          </a>
          <a href="#" className="hover:text-secondary">
            <Linkedin className="h-6 w-6" />
          </a>
          <a href="#" className="hover:text-secondary">
            <Mail className="h-6 w-6" />
          </a>
        </div>
        <div className="text-center mt-4">
          <p>&copy; 2024 Jocelyn Pei Hua YIN Interior Design. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}