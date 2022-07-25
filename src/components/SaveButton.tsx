import React, { FC, ReactNode, SyntheticEvent } from 'react';

interface Props {
    onSave: (e: SyntheticEvent) => void;
}

const SaveButton: FC<Props> = ({ onSave }) => (
    <button onClick={onSave}>Save</button>
);

export default SaveButton;