import s from './styles.module.scss'
import { head } from 'helpers'
import { useEffect } from 'react'

export default function Main() {
  useEffect(() => {
    head({ title: 'Home' })
  }, [])
  return (
    <div className={s.main}>
      <div className={s.dashboard}>
        <div className={s.content + ' innerScrollX'}>
        
        </div>
      </div>
    </div>
  )
}
