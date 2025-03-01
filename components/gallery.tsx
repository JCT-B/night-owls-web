"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

const galleryItems = [
  {
    id: 1,
    title: "Project Alpha",
    description: "A revolutionary AI-powered solution",
    category: "ai",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
  },
  {
    id: 2,
    title: "EcoTrack",
    description: "Sustainable living made easy",
    category: "sustainability",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
  },
  {
    id: 3,
    title: "HealthHub",
    description: "Your personal health assistant",
    category: "health",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
  },
  {
    id: 4,
    title: "CodeCollab",
    description: "Collaborative coding platform",
    category: "development",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
  },
]

const categories = [
  { id: "all", label: "All" },
  { id: "ai", label: "AI" },
  { id: "sustainability", label: "Sustainability" },
  { id: "health", label: "Health" },
  { id: "development", label: "Development" },
]

const GalleryDialog = ({ openDialog, setOpenDialog, selectedItem, selectedImageIndex, setSelectedImageIndex }) => {
  if (!selectedItem) return null

  const navigateImage = (direction) => {
    if (direction === "left") {
      setSelectedImageIndex((prev) => (prev === 0 ? selectedItem.images.length - 1 : prev - 1))
    } else {
      setSelectedImageIndex((prev) => (prev === selectedItem.images.length - 1 ? 0 : prev + 1))
    }
  }

  return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>{selectedItem.title}</DialogTitle>
          <DialogDescription>{selectedItem.description}</DialogDescription>
        </DialogHeader>
        <div className="relative aspect-video">
          <Image
            src={selectedItem.images[selectedImageIndex] || "/placeholder.svg"}
            alt={`${selectedItem.title} - Image ${selectedImageIndex + 1}`}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
          <Button
            variant="outline"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2"
            onClick={() => navigateImage("left")}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2"
            onClick={() => navigateImage("right")}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex justify-center gap-2 mt-4">
          {selectedItem.images.map((_, index) => (
            <Button
              key={index}
              variant={index === selectedImageIndex ? "default" : "outline"}
              size="icon"
              onClick={() => setSelectedImageIndex(index)}
            >
              {index + 1}
            </Button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [openDialog, setOpenDialog] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  const filteredItems = galleryItems.filter((item) => (activeFilter === "all" ? true : item.category === activeFilter))

  const handleOpenGallery = (item) => {
    setSelectedItem(item)
    setSelectedImageIndex(0)
    setOpenDialog(true)
  }

  return (
    <section id="gallery" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Project Gallery</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our innovative projects through this interactive gallery. Each image showcases our team's creativity
            and technical expertise.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeFilter === category.id ? "default" : "outline"}
              onClick={() => setActiveFilter(category.id)}
              className="rounded-full"
            >
              {category.label}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <Card
              key={item.id}
              className="overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg"
              onClick={() => handleOpenGallery(item)}
            >
              <div className="relative h-48">
                <Image src={item.images[0] || "/placeholder.svg"} alt={item.title} layout="fill" objectFit="cover" />
              </div>
              <CardContent className="p-4">
                <CardTitle className="mb-2">{item.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <GalleryDialog
          openDialog={openDialog}
          setOpenDialog={setOpenDialog}
          selectedItem={selectedItem}
          selectedImageIndex={selectedImageIndex}
          setSelectedImageIndex={setSelectedImageIndex}
        />
      </div>
    </section>
  )
}

