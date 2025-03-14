import React from 'react'
import { Button } from './ui/button';
import { Plus } from 'lucide-react';
interface EmptyStateProps {
    message: string;
    buttonText: string;
    onButtonClick?: () => void;
}

const EmptyState = ({ message, buttonText, onButtonClick }: EmptyStateProps) => {
  return (
    <div className='flex items-center justify-center h-full'>
        <div className='text-center p-8'>
            <p className='text-muted-foreground mb-4'>{message}</p>
            <Button onClick={onButtonClick}>
                <Plus className='mr-1 h-4 w-4' />
                {buttonText}</Button>
        </div>
      
    </div>
  )
}

export default EmptyState
