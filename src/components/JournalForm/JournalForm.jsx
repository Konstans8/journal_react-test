import './JournalForm.css';
import { useState } from 'react';
import Button from '../Button/Button';

function JournalForm({onSubmit}) {

    const addJournalItem = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formProps = Object.fromEntries(formData);
        onSubmit(formProps);
    };

    return (
        <form action="" className='journal-form' onSubmit={addJournalItem}>
            <input type='text' name='title'/>
            <input type='date' name='date'/>
            <input type='text' name='tag'/>
            <textarea name="text" id="" cols="30" rows="10"></textarea>
            <Button text="Save" onClick={() => console.log('you clicked!')}/>
        </form>
    );
}

export default JournalForm;