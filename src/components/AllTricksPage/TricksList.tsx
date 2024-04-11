import TrickItem from '@/components/AllTricksPage/TrickItem'

const TricksList = ({tricksList}) => {

  const tricks = tricksList.map(trick =>  {
    return <TrickItem trickInfo={trick} />
  })


  return (
    <div>
      <p>TricksList</p>
      {tricks}
    </div>
  )
}

export default TricksList;