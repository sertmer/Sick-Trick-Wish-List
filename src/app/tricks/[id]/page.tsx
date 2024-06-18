import { useParams } from 'next/navigation';
import '@/components/Tricks/TrickItem';
import TrickItem from '@/components/Tricks/TrickItem';
import {fetchTrickById} from '../../../../data/data';
import {TricksContext} from '../../../context/context';
import { useContext } from 'react';

async function Page({params}: {params: {id: string}}) {
  const tricks = useContext(TricksContext)
  const id = params.id
  const trick = tricks.find(trick => String(trick.trick_id) === id);

  if (!trick) {
    return <div>Trick not found</div>;
  }

  return (
    <TrickItem trickInfo={trick} simple={false} />
  )
}

export default Page;