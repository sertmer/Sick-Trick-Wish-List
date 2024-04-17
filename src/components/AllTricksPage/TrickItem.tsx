const TrickItem = ({trickInfo}) => {
  
  const {
    name,
    trickType,
    difficulty,
    description,
    variation,
    // tutorialLinks,
    status
  } = trickInfo;

  
  return (
    <div className="border border-black p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
      <h3 className="text-base sm:text-lg font-bold">{name}</h3>
      <p className="text-sm sm:text-base">{trickType}</p>
      <p className="text-sm sm:text-base">{difficulty}</p>
      <p className="text-sm sm:text-base">{description}</p>
      <p className="text-sm sm:text-base">{variation}</p>
      {/* <p className="text-sm sm:text-base">{tutorialLinks}</p> */}
      <p className="text-sm sm:text-base">{status}</p>
    </div>
  )
}

export default TrickItem;