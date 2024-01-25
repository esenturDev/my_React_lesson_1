import {Textheader} from '../Ul/text/Text.jsx';
import { Button } from '../Ul/ulButton/Button';
import css from './Header.module.css';

const Header = () => {
  
  return (
    <div className={css.headerContainer}>
      <div className={css.content}>
        <ul>
          <h1>PREMIER</h1>
          <img src="https://cdn.icon-icons.com/icons2/2131/PNG/512/search_find_locate_icon_131498.png" alt="" />
          <Textheader name='Главная' color='p'/>
          <Textheader name='Все видео' color='text'/>
          <Textheader name='Live' color='text'/>
          <Textheader name='Детям' color='text'/>
          <Textheader name='Коллекции' color='text'/>
          <Button name='Купить подписку за 129P' color='chocolate'/>
          <Button name='Войти!' color='black'/>
        </ul>
      </div>
    </div>
  )
}

export default Header