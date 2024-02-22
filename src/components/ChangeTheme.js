import React from 'react'
import { useTheme } from '../contexts/ThemeContext'

function ChangeTheme() {
    const {theme, toggleTheme} = useTheme();
    
    return (
        <div>
            <div>Aktif Tema: {theme}</div>
            <button onClick={toggleTheme}>Tema değiştir</button>
        </div>
    )
}

export default ChangeTheme
