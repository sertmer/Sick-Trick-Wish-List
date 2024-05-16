import TricksList from '@/components/Tricks/TricksList';
import { fetchTricks } from '../../../data/data';
import { Trick } from '../../../types/types';

async function Page() {
  const tricks = await fetchTricks();
  return (
    <div>
    <TricksList tricks={tricks}/>
    </div>
  )
}

export default Page;