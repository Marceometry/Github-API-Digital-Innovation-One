import React, { useState } from 'react'
import { Button } from '../'
import { useGithub } from '../../hooks/github'
import * as S from './styles'

export function Header() {
  const [value, setValue] = useState('')
  const { getAllInfo } = useGithub()

  function handleSearch(value) {
    if (!value) return
    getAllInfo(value)
  }

  function handlePressEnter(e) {
    if (e.key === 'Enter') {
      handleSearch(value)
    }
  }

  return (
    <S.Header>
      <S.Input
        type='text'
        value={value}
        onKeyPress={handlePressEnter}
        onChange={(e) => setValue(e.target.value)}
        placeholder='Pesquise por um usuário...'
      />
      <Button primary disabled={!value} onClick={() => handleSearch(value)}>
        Pesquisar
      </Button>
    </S.Header>
  )
}
