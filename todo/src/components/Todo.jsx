import React from 'react';

export default function Todo({id,children}) {
    return (
        <li key={id}>{children}</li>
    );
}

