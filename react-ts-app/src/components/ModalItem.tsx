import './styles/Row.scss'

type Movie = {
  overview: String
}

const ModalItem = ({ overview} :Movie) => {
  console.log(overview)

  return(
    <div className='aaa'>a</div>
  )
}

export default ModalItem;