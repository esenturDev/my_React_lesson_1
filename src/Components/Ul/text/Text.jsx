import './Text.css';

export const Textheader = (props) => {
  console.log(props);
  return <div>
    <p className={`${props.color}`}>{props.name}</p>
  </div>
}