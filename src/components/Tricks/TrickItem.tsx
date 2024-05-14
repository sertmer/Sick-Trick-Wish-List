'use client';
import { Trick } from '../../../types/types';



interface TrickItemProps {
  trickInfo: Trick;
  simple: boolean;
}

const TrickItem = ({ trickInfo, simple }: TrickItemProps) => {
  const {
    name,
    trick_type,
    difficulty,
    description,
    variation,
    // tutorialLinks,
    status,
    trick_id
  } = trickInfo;

  if (simple) {
    return (
      <div className="border border-black p-4 w-36 h-36 sm:w-60 sm:h-60 md:w-64 md:h-64 lg:w-50 lg:h-50 xl:w-70 xl:h-70 flex flex-col items-center justify-center">
    <h3 className="p-4 text-base sm:text-lg font-bold text-center text-ellipsis">{variation} {name}</h3>
    <p className="text-sm sm:text-base">{difficulty}</p>
    <p className="text-sm sm:text-base">{status}</p>
</div>

    )
  } else {
    return (
      <div className="border border-black p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
        <h3 className="text-base sm:text-lg font-bold">{name}</h3>
        <p className="text-sm sm:text-base">{trick_type}</p>
        <p className="text-sm sm:text-base">{difficulty}</p>
        <p className="text-sm sm:text-base">{description}</p>
        <p className="text-sm sm:text-base">{variation}</p>
        <p className="text-sm sm:text-base">{status}</p>
      </div>
    )
  }
}

export default TrickItem;