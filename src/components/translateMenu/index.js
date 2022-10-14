import React from 'react'
import { useTranslation } from 'react-i18next'
const TranslateMenu = () => {
  const { i18n } = useTranslation()

  function handleChangeLanguage(language) {
    i18n.changeLanguage(language)
  }
  return (
    <div className="flags-container" style={{padding: '12px 0'}}>
      <button class="br" onClick={() => handleChangeLanguage('pt-BR')}></button>
      {" "}
      <button class="us" onClick={() => handleChangeLanguage('en-US')}></button>
    </div>
  )
}

export default TranslateMenu;
