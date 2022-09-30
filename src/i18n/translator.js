import { useTranslation } from 'react-i18next'

const useTranslator = (path) => {
  const { t } = useTranslation();
  return t(path)
}

export default useTranslator