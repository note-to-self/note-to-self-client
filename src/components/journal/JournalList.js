import React from 'react';
import PropTypes from 'prop-types';
import Note from '../notes/Note';

export default function JournalList({ journalList, handleSubmit, handleCheckbox }) {
  const list = journalList.map(note => {
    const repeat = note.repeat.weekly ? 'weekly' : 'daily';
    <li>
      <Note 
        key={note._id}
        _id={note._id}
        body={note.body}
        schedule={repeat}
        checkboxLabel="Delete Note"
        checkboxValue={false}
        handleCheckbox={handleCheckbox}
        handleSubmit={handleSubmit}
      />
    </li>;
  });

  return (
    <ul>{list}</ul>
  );
}

JournalList.propTypes = {
  journalList: PropTypes.array.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleCheckbox: PropTypes.func.isRequired
};