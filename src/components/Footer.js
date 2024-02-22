import React from 'react'
import { useTheme } from '../contexts/ThemeContext';
import { useLang } from '../contexts/LangContext';

function Footer() {
    const { theme, toggleTheme } = useTheme();
    const {lang} = useLang()

    return (
        <div>
            <hr/>
            <h2>Aktif Tema: {theme}</h2>
            <div>Dil: {lang}</div>
            <button onClick={toggleTheme}>Tema değiştir</button>
        </div>
    )
}

export default Footer
