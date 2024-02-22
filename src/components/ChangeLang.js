import React from 'react'
import { useLang } from '../contexts/LangContext'

function ChangeLang() {
    const {lang, toggleLang} = useLang()
    return (
        <div>
            <hr></hr>
            <div>
                Dil:
                <button onClick={toggleLang}>{lang}</button>    
            </div>
        </div>
    )
}

export default ChangeLang
