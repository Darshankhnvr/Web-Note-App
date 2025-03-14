// import Image from "next/image";
"use client"
import Header from "@/components/header";
import NoteEditor from "@/components/node-editor";
import NoteView from "@/components/note-view";
import NotesSidebar from "@/components/notes-sidebar";
import { Note } from "@/lib/types";
import { useState } from "react";

export default function Home() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [activeNote, setActiveNote] = useState<Note | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  
  console.log(notes)
  console.log(activeNote)

  const createNewNote = () =>{
    const newNote: Note ={
      id:Date.now().toString(),
      title: "New Note",
      content:"",
      createdAt: Date.now().toString()
    }
    setNotes([newNote,...notes]);
    setIsEditing(true);
  }

  const selectNote = (note: Note) =>{
    setActiveNote(note);
    setIsEditing(false)
  }

  const renderNoteContent = () =>{
    if(activeNote && isEditing){
      return <NoteEditor note={activeNote} />
    }
    if(activeNote){
      return <NoteView note={activeNote}/>
    }
    return null
  }
  return (
    <div className="flex flex-col min-h-screen bg-red-50">
      <Header onNewNote={createNewNote} />
      <main className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className=" grid md:col-span-1">
          <NotesSidebar notes={notes} onSelectNote={selectNote} />
        </div>
        <div className=" grid md:col-span-2">
          {renderNoteContent()}
        </div>
      </main>
    </div>
  );
}
