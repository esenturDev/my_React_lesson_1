import './Button.css';

export const Button = (props) => {
  return (
    <button className={`${props.color} ${props.style}`}>{props.name}</button>
  )
}