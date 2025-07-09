import React, { useState } from 'react';
import checked from '../assets/icon/checked-checkbox-50.png';
import unchecked from '../assets/icon/unchecked-checkbox-50.png';
import renameIcon from '../assets/icon/rename.png';

const Todoitems = ({ text, id, isComplete, deleteItem, toggle, renameItem }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(text);

    const handleRename = () => {
        setIsEditing(true);
    };

    const handleRenameSubmit = (e) => {
        e.preventDefault();
        if (editText.trim() !== '') {
            renameItem(id, editText.trim());
        }
        setIsEditing(false);
    };

    return (
        <div className='flex items-center my-7 gap-2'>
            <div onClick={() => { toggle(id); }} className='flex flex-1 items-center cursor-pointer'>
                <img src={isComplete ? checked : unchecked} alt="" className='w-9' />
                {isEditing ? (
                    <form onSubmit={handleRenameSubmit} className='ml-4 flex flex-1'>
                        <input
                            className='border-b border-gray-400 outline-none flex-1'
                            value={editText}
                            onChange={e => setEditText(e.target.value)}
                            autoFocus
                        />
                        <button type="submit" className='ml-2 text-blue-500'>Save</button>
                    </form>
                ) : (
                    <p className='text-slate-700 ml-4 text-[17]'>{text}</p>
                )}
            </div>
            <img
                onClick={handleRename}
                src={renameIcon}
                alt="Rename"
                className='cursor-pointer w-9'
            />
            <img
                onClick={() => { deleteItem(id); }}
                src="src/assets/icon/delete.png"
                alt="Delete"
                className='cursor-pointer w-9'
            />
        </div>
    );
};

export default Todoitems;