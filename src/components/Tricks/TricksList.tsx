import TrickItem from '@/components/Tricks/TrickItem';
import { Trick } from '../../../types/types';
import Link from 'next/link';
import {fetchTricks} from '../../../data/data';

// interface TricksListProps {
//   tricks: Trick[]
// }

async function TricksList() {

  const tricks = await fetchTricks();

  const tricksList = tricks.map(trick => {
    return (
      <Link href={`/tricks/${trick.trick_id}`} key={trick.trick_id}>
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