import { useParams } from 'next/navigation';
import '@/components/Tricks/TrickItem';
import TrickItem from '@/components/Tricks/TrickItem';
import {fetchTrickById} from '../../../../data/data';

async function Page({params}) {
  const id = params.id
  const trick = await fetchTrickById(id)
  // add render for undefined trick

  return (
    <TrickItem trickInfo={trick} />
  )
}

export default Page;