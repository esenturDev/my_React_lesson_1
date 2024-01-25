import './Input.css';

export const Input = ({style, placeholder, type}) => {
  
  return (
    <input className={style} type={type} placeholder={placeholder}/>
  )
}