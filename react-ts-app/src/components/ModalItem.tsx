import './styles/Row.scss'

type Item = {
  title: String,
  overview : String
}

const ModalItem = ({ title, overview } :Item) => {
  return(
    <>
      <div className='aaa'>{title}</div>
      <div className='aaa'>{overview}</div>
    </>
  )
}

export default ModalItem;