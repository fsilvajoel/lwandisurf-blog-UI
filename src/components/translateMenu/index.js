import React from 'react'
import { useTranslation } from 'react-i18next'
const TranslateMenu = () => {
  const { i18n } = useTranslation()

  function handleChangeLanguage(language) {
    i18n.changeLanguage(language)
  }
  return (
    <div className="flags-container">
      <button
        onClick={() => handleChangeLanguage('pt-BR')}
      >
        PT-BR</button>
      <button
        onClick={() => handleChangeLanguage('en-US')}
      >EN-US</button>
    </div>
  )
}

export default TranslateMenu;
