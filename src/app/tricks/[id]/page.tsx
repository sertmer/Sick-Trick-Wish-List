'use client';
import { useParams } from 'next/navigation';
import '@/components/Tricks/TrickItem';
import tricks from '../../../../data/tricks';

const Page = () => {
  const params = useParams();
  const id = params.id
  const matchingTrick = tricks.find(trick => id === trick.trickId.toString())

  if (!matchingTrick) {
    return <p>No Trick Found</p>
  } 

  return (
    <div className="border border-black p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
      <h3 className="text-base sm:text-lg font-bold">{matchingTrick.name}</h3>
      <p className="text-sm sm:text-base">{matchingTrick.trickType}</p>
      <p className="text-sm sm:text-base">{matchingTrick.difficulty}</p>
      <p className="text-sm sm:text-base">{matchingTrick.description}</p>
      <p className="text-sm sm:text-base">{matchingTrick.variation}</p>
      {/* <p className="text-sm sm:text-base">{matchingTrick.tutorialLinks}</p> */}
      <p className="text-sm sm:text-base">{matchingTrick.status}</p>
    </div>
  )
}

export default Page;