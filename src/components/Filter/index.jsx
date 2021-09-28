import { useEffect, useState } from 'react'
import * as S from './styles'

export function Filter({ setList, originalList }) {
  const [selectedLanguage, setSelectedLanguage] = useState('')
  const [languages, setLanguages] = useState(() => generateLanguageOptions())

  useEffect(() => {
    setLanguages(() => generateLanguageOptions())
  }, [originalList])

  function generateLanguageOptions() {
    const options = originalList.reduce((array, item) => {
      const language = item.language
      if (!language) return array

      const hasLanguage = array.includes(language)
      !hasLanguage && array.push(language)
      return array
    }, [])

    if (options.includes(selectedLanguage)) filter(selectedLanguage)

    return options
  }

  function filter(language) {
    setSelectedLanguage(language)

    if (!language) {
      setList(originalList)
      return
    }

    const filteredList = originalList.filter((item) => {
      return item.language === language
    })

    setList(filteredList)
  }

  return (
    <S.Wrapper>
      <label htmlFor='language'>Linguagem:</label>

      <S.Select
        name='language'
        id='language'
        value={selectedLanguage}
        onChange={(e) => filter(e.target.value)}
      >
        <option value=''>Todas</option>
        {languages.map((language) => (
          <option key={language} value={language}>
            {language}
          </option>
        ))}
      </S.Select>
    </S.Wrapper>
  )
}
