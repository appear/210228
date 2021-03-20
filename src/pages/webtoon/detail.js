import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { useUserContext } from '../../contexts/user-context'

function DetailPage() {
  const { id } = useParams()
  const [webtoon, setWebtoon] = useState(null)
  const {
    action: { setRecentlyViewes },
  } = useUserContext()

  useEffect(() => {
    const fetchNewWebtoon = async () => {
      const response = await fetch(`http://localhost:3000/webtoons/${id}`)
      const data = await response.json()

      setRecentlyViewes(data)
      setWebtoon(data)
    }

    fetchNewWebtoon()
  }, [id])

  if (!webtoon) {
    return null
  }

  const { title, imageUrl } = webtoon

  return (
    <div>
      <img src={imageUrl} />
      <h2>{title}</h2>
    </div>
  )
}

export default DetailPage
