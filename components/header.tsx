import React from 'react'
import { Button } from './ui/button'
import {  Plus } from 'lucide-react'

interface HeaderProps{
    onNewNote: () => void;
}

const Header = ({ onNewNote }: HeaderProps) => {
  return (
    <header className=' border-4 p-4 bg-card shadow-2xl '>
      <div className='container mx-auto flex justify-between items-center'>
        <h1 className='text-2xl font-bold'>Browser Notes</h1>
        <Button onClick={onNewNote} size={"sm"} className='cursor-pointer'>
            <Plus className='mr-1 h-4 w-4' />
            New Note</Button>
      </div>
    </header>
  )
}

export default Header
