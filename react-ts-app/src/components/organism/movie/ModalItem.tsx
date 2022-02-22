import '../../styles/Row.scss'

type Item = {
  title: String,
  overview : String
}

const ModalItem = ({ title, overview } :Item) => {
  return(
    <div className='main'>
      <div className='title'>{title}</div>
      <div className='subTitle '>{overview}</div>
    </div>
  )
}

export default ModalItem;