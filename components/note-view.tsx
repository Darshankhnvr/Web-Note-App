import { Note } from '@/lib/types'
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { formatDate } from '@/lib/storage'

interface NoteViewProps {
note:Note
}

const NoteView = ({note}:NoteViewProps) => {
  return (
   <Card>
    <CardHeader>
        <CardTitle>{note.title}</CardTitle>
        <p className='text-sm text-muted-foreground'>{formatDate(Number(note.createdAt))}</p>
        
    </CardHeader>
    <CardContent>
        {note.content}
    </CardContent>
   </Card>
  )
}

export default NoteView
