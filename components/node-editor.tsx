"use client"
import { Note } from '@/lib/types'
import React, { useState } from 'react'
import { Card, CardContent, CardHeader } from './ui/card'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'

interface NoteEditorProps{
    note:Note
}

const NoteEditor = ({note}:NoteEditorProps) => {
    const [title, setTitle] = useState(note.title);
    const [content, setContent] = useState(note.content);

  return (
    <Card>
        <CardHeader>
            <Input
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            placeholder='Note Title'
            className='text-xl font-bold border-none px-0 focus-visible:ring-0 p-0'
            ></Input>
        </CardHeader>
        <CardContent>
            <Textarea
            value={content}
            onChange={(e)=>setContent(e.target.value)}
            placeholder='Write yout note here..'
            className='min-h-[calc(100vh-350px)] resize-none border-none p-0 focus-visible:ring-0'
            >
                
            </Textarea>
        </CardContent>
    </Card>
  )
}

export default NoteEditor
