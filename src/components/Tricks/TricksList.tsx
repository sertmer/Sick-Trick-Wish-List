import TrickItem from '@/components/Tricks/TrickItem';
import { Trick } from '../../../types/types';
import Link from 'next/link';
import { fetchTricks } from '../../../data/data';

async function TricksList() {

  const tricks = await fetchTricks(); // get all tricks
  
  const filterTricksByType = (trickType: string): Trick[] => {
    return tricks.filter(trick => trick.trick_type === trickType);
  };

  const createComponents = (tricks: Trick[]) => {
    return tricks.map(trick => {
      return (
        <Link href={`/tricks/${trick.trick_id}`} key={trick.trick_id}>
          <TrickItem trickInfo={trick} />
        </Link>
      )
    })
  }

  const basic = filterTricksByType('Basic');
  const flip = filterTricksByType('Flip')
  const grind = filterTricksByType('Grind')

  const basicTricks = createComponents(basic)
  const flipTricks = createComponents(flip)
  const grindTricks = createComponents(grind)


  return (
    <div>
      <div className="flex overflow-x-auto py-2 sm:py-4 space-x-2 sm:space-x-4">
        {basicTricks}
      </div>
      <div className="flex overflow-x-auto py-2 sm:py-4 space-x-2 sm:space-x-4">
        {flipTricks}
      </div>
      <div className="flex overflow-x-auto py-2 sm:py-4 space-x-2 sm:space-x-4">
        {grindTricks}
      </div>
    </div>
  )
}

export default TricksList;