import React from 'react';
import NoteForm from './NoteForm';
import { NoteData, Tag } from './App';

type NewNoteProps = {
  onSubmit: (data: NoteData) => void;
  onAddTag: (tag: Tag) => void;
};

const NewNote = ({ onSubmit, onAddTag }: NewNoteProps) => {
  return (
    <div>
      <h1 className='mb-4'>New note</h1>
      <NoteForm onSubmit={onSubmit} onAddTag={onAddTag} />
    </div>
  );
};

export default NewNote;
