import { useParams } from 'next/navigation';
import '@/components/Tricks/TrickItem';
import TrickItem from '@/components/Tricks/TrickItem';
import {fetchTrickById} from '../../../../data/data';

async function Page({params}: {params: {id: string}}) {
  const id = params.id
  const trick = await fetchTrickById(id)

  return (
    <TrickItem trickInfo={trick} simple={false} />
  )
}

export default Page;