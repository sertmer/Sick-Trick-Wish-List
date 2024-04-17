import TrickItem from '@/components/AllTricksPage/TrickItem'

const TricksList = ({ tricksList }) => {

  const tricks = tricksList.map(trick => {
    return <TrickItem trickInfo={trick} />
  })

  return (
    <div>
      <p>TricksList</p>
      <div className="flex overflow-x-auto py-2 sm:py-4 space-x-2 sm:space-x-4">
        {tricks}
      </div>
    </div>
  )
}

export default TricksList;