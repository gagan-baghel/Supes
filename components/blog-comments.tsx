"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { ThumbsUp, Reply } from "lucide-react"

export function BlogComments() {
  const [comment, setComment] = useState("")
  const [comments, setComments] = useState([
    {
      id: 1,
      author: "Sarah Johnson",
      image: "/placeholder.svg?height=100&width=100",
      date: "May 14, 2023",
      content:
        "This article completely changed my approach to cornering. I applied these techniques during my last track day and saw immediate improvements in my confidence and lap times. The section on body positioning was particularly helpful!",
      likes: 12,
      replies: [
        {
          id: 101,
          author: "Alex Marquez",
          image: "/placeholder.svg?height=100&width=100",
          date: "May 14, 2023",
          content:
            "Thanks for the feedback, Sarah! I'm glad the techniques helped. Body positioning is indeed one of the most impactful aspects of cornering. Keep practicing and let me know how your next track day goes!",
          likes: 3,
        },
      ],
    },
    {
      id: 2,
      author: "Michael Chen",
      image: "/placeholder.svg?height=100&width=100",
      date: "May 13, 2023",
      content:
        "Great article! I've been struggling with hairpin turns for years. The tip about trail braking made a huge difference when I tried it last weekend. Could you elaborate more on how to handle decreasing radius turns? Those still give me trouble.",
      likes: 8,
      replies: [],
    },
  ])

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault()
    if (!comment.trim()) return

    // In a real implementation, this would submit to a backend
    const newComment = {
      id: comments.length + 1,
      author: "You",
      image: "/placeholder.svg?height=100&width=100",
      date: "Just now",
      content: comment,
      likes: 0,
      replies: [],
    }

    setComments([newComment, ...comments])
    setComment("")
  }

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold">Comments ({comments.length})</h2>
      </div>

      <form onSubmit={handleSubmitComment} className="mb-8">
        <Textarea
          placeholder="Share your thoughts..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="min-h-[100px]"
        />
        <div className="mt-2 flex justify-end">
          <Button type="submit" className="bg-red-600 text-white hover:bg-red-700">
            Post Comment
          </Button>
        </div>
      </form>

      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="rounded-lg border bg-card p-4">
            <div className="flex items-start space-x-4">
              <div className="h-10 w-10 overflow-hidden rounded-full">
                <Image
                  src={comment.image || "/placeholder.svg"}
                  alt={comment.author}
                  width={100}
                  height={100}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">{comment.author}</div>
                    <div className="text-xs text-muted-foreground">{comment.date}</div>
                  </div>
                </div>
                <div className="mt-2">{comment.content}</div>
                <div className="mt-2 flex items-center space-x-4">
                  <Button variant="ghost" size="sm">
                    <ThumbsUp className="mr-1 h-3 w-3" />
                    Like ({comment.likes})
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Reply className="mr-1 h-3 w-3" />
                    Reply
                  </Button>
                </div>

                {comment.replies.length > 0 && (
                  <div className="mt-4 space-y-4 rounded-lg bg-muted/50 p-4">
                    {comment.replies.map((reply) => (
                      <div key={reply.id} className="flex items-start space-x-4">
                        <div className="h-8 w-8 overflow-hidden rounded-full">
                          <Image
                            src={reply.image || "/placeholder.svg"}
                            alt={reply.author}
                            width={100}
                            height={100}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="font-medium">{reply.author}</div>
                              <div className="text-xs text-muted-foreground">{reply.date}</div>
                            </div>
                          </div>
                          <div className="mt-2">{reply.content}</div>
                          <div className="mt-2">
                            <Button variant="ghost" size="sm">
                              <ThumbsUp className="mr-1 h-3 w-3" />
                              Like ({reply.likes})
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
