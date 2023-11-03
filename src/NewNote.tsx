import React from 'react';
import NoteForm from './NoteForm';

const NewNote = () => {
  return (
    <div>
      <h1 className='mb-4'>New note</h1>
      <NoteForm />
    </div>
  );
};

export default NewNote;
