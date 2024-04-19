import TrickItem from '@/components/AllTricksPage/TrickItem';
import { Trick } from '../../../types/types';
import Link from 'next/link';

interface TricksListProps {
  tricks: Trick[]
}

const TricksList = ({ tricks }: TricksListProps) => {

  const tricksList = tricks.map(trick => {
    return (
      <Link href={`/tricks/${trick.id}`} >
        <TrickItem trickInfo={trick} />
      </Link>
    )
  })

  return (
    <div>
      <p>TricksList</p>
      <div className="flex overflow-x-auto py-2 sm:py-4 space-x-2 sm:space-x-4">
        {tricksList}
      </div>
    </div>
  )
}

export default TricksList;