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
    <div>
      <p>TrickItem</p>
      <p>{name}</p>
      <p>{trickType}</p>
      <p>{difficulty}</p>
      <p>{description}</p>
      <p>{variation}</p>
      {/* <p>{tutorialLinks}</p> */}
      <p>{status}</p>
    </div>
  )
}

export default TrickItem;