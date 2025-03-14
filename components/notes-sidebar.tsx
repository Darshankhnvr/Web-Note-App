import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import EmptyState from "./empty-state";
import { Note } from "@/lib/types";
import { Button } from "./ui/button";
import { formatDate } from "@/lib/storage"; // Add this import
import { Trash2 } from "lucide-react";

interface NotesSidebarProps {
  notes: Note[] // Fixed: should be an array of Note, not single Note
  onSelectNote: (note: Note) => void
}

const NotesSidebar = ({ notes, onSelectNote }: NotesSidebarProps) => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>My Notes</CardTitle>
        </CardHeader>
        <CardContent>
          {notes.length === 0 ? (
            <EmptyState message="no notes yet" buttonText="Create Note" />
          ) : (
            <div>
              {notes.map(note => (
                <div 
                  key={note.id} 
                  onClick={() => onSelectNote(note)}
                  className="p-3 rounded-md cursor-pointer hover:bg-accent transition-colors"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h3>
                        {note.title.substring(0,30)}
                        {note.title.length > 30 ? "..." : ""}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {note.content.substring(0,30)}
                        {note.content.length > 40 ? "..." : ""}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {formatDate(Number(note.createdAt))}
                      </p>
                    </div>
                    <Button
                    variant={"ghost"}
                    size={"icon"}
                    className="h-8 w-8 text-muted-foreground hover:text-destructive cursor-pointer"
                    > <Trash2 className="w-4 h-4" /> </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default NotesSidebar;