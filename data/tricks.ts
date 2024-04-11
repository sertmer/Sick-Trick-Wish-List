const tricks = [
  {
    name: 'Ollie',
    trickType: 'Basic',
    difficulty: 'Beginner',
    description: 'A basic vertical jump with the skateboard.',
    variation: 'Regular',
    tutorialLinks: [],
    status: 'Not Started'
  },
  {
    name: 'Ollie',
    trickType: 'Basic',
    difficulty: 'Beginner',
    description: 'A basic vertical jump with the skateboard from your opposite stance',
    variation: 'Switch',
    tutorialLinks: [],
    status: 'Not Started'
  },
  {
    name: 'Ollie',
    trickType: 'Basic',
    difficulty: 'Beginner',
    description: 'A basic vertical jump with the skateboard while rolling backwards',
    variation: 'Fakie',
    tutorialLinks: [],
    status: 'Not Started'
  },
  {
    name: 'Ollie',
    trickType: 'Basic',
    difficulty: 'Beginner',
    description: 'A basic vertical jump with the skateboard from the nose rather than the tail',
    variation: 'Nollie',
    tutorialLinks: [],
    status: 'Not Started'
  },
  {
    name: 'Pop Shuvit',
    trickType: 'Basic',
    difficulty: 'Intermediate',
    description: 'A trick where the skateboard rotates 180 degrees underfoot.',
    variation: 'Regular Frontside',
    tutorialLinks: [],
    status: 'Not Started'
  },
  {
    name: 'Pop Shuvit',
    trickType: 'Basic',
    difficulty: 'Intermediate',
    description: 'A trick where the skateboard rotates 180 degrees underfoot.',
    variation: 'Regular Backside',
    tutorialLinks: [],
    status: 'Not Started'
  },
  {
    name: 'Pop Shuvit',
    trickType: 'Basic',
    difficulty: 'Intermediate',
    description: 'A trick where the skateboard rotates 180 degrees underfoot.',
    variation: 'Switch Frontside',
    tutorialLinks: [],
    status: 'Not Started'
  },
  {
    name: 'Pop Shuvit',
    trickType: 'Basic',
    difficulty: 'Intermediate',
    description: 'A trick where the skateboard rotates 180 degrees underfoot.',
    variation: 'Switch Backside',
    tutorialLinks: [],
    status: 'Not Started'
  },
  {
    name: 'Pop Shuvit',
    trickType: 'Basic',
    difficulty: 'Intermediate',
    description: 'A trick where the skateboard rotates 180 degrees underfoot.',
    variation: 'Nollie Frontside',
    tutorialLinks: [],
    status: 'Not Started'
  },
  {
    name: 'Pop Shuvit',
    trickType: 'Basic',
    difficulty: 'Intermediate',
    description: 'A trick where the skateboard rotates 180 degrees underfoot.',
    variation: 'Nollie Backside',
    tutorialLinks: [],
    status: 'Not Started'
  },
  {
    name: 'Pop Shuvit',
    trickType: 'Basic',
    difficulty: 'Intermediate',
    description: 'A trick where the skateboard rotates 180 degrees underfoot.',
    variation: 'Fakie Frontside',
    tutorialLinks: [],
    status: 'Not Started'
  },
  {
    name: 'Pop Shuvit',
    trickType: 'Basic',
    difficulty: 'Intermediate',
    description: 'A trick where the skateboard rotates 180 degrees underfoot.',
    variation: 'Fakie Backside',
    tutorialLinks: [],
    status: 'Not Started'
  },
  {
    name: 'Kickflip',
    trickType: 'Flip',
    difficulty: 'Intermediate',
    description: 'A trick where the skateboard flips over vertically, flicked with the toe.',
    variation: 'Regular',
    tutorialLinks: [],
    status: 'Not Started'
  },
  {
    name: 'Kickflip',
    trickType: 'Flip',
    difficulty: 'Intermediate',
    description: 'A trick where the skateboard flips over vertically, flicked with the toe.',
    variation: 'Switch',
    tutorialLinks: [],
    status: 'Not Started'
  },
  {
    name: 'Kickflip',
    trickType: 'Flip',
    difficulty: 'Intermediate',
    description: 'A trick where the skateboard flips over vertically, flicked with the toe.',
    variation: 'Nollie',
    tutorialLinks: [],
    status: 'Not Started'
  },
  {
    name: 'Kickflip',
    trickType: 'Flip',
    difficulty: 'Intermediate',
    description: 'A trick where the skateboard flips over vertically, flicked with the toe.',
    variation: 'Fakie',
    tutorialLinks: [],
    status: 'Not Started'
  },
  {
    name: 'Heelflip',
    trickType: 'Flip',
    difficulty: 'Intermediate',
    description: 'A trick where the skateboard flips over vertically, flicked with the heel.',
    variation: 'Regular',
    tutorialLinks: [],
    status: 'Not Started'
  },
  {
    name: 'Heelflip',
    trickType: 'Flip',
    difficulty: 'Intermediate',
    description: 'A trick where the skateboard flips over vertically, flicked with the heel.',
    variation: 'Switch',
    tutorialLinks: [],
    status: 'Not Started'
  },
  {
    name: 'Heelflip',
    trickType: 'Flip',
    difficulty: 'Intermediate',
    description: 'A trick where the skateboard flips over vertically, flicked with the heel.',
    variation: 'Nollie',
    tutorialLinks: [],
    status: 'Not Started'
  },
  {
    name: 'Heelflip',
    trickType: 'Flip',
    difficulty: 'Intermediate',
    description: 'A trick where the skateboard flips over vertically, flicked with the heel.',
    variation: 'Fakie',
    tutorialLinks: [],
    status: 'Not Started'
  },
  {
    name: '50-50',
    trickType: 'Grind',
    difficulty: 'Intermediate',
    description: 'Grinding on a rail with both trucks, approaching with the ledge towards your front.',
    variation: 'Regular Frontside',
    tutorialLinks: [],
    status: 'Not Started'
  },
  {
    name: '50-50',
    trickType: 'Grind',
    difficulty: 'Intermediate',
    description: 'Grinding on a rail with both trucks, approaching with the ledge towards your back.',
    variation: 'Regular Backside',
    tutorialLinks: [],
    status: 'Not Started'
  },
  {
    name: '50-50',
    trickType: 'Grind',
    difficulty: 'Intermediate',
    description: 'Grinding on a rail with both trucks, approaching with the ledge towards your front.',
    variation: 'Switch Frontside',
    tutorialLinks: [],
    status: 'Not Started'
  },
  {
    name: '50-50',
    trickType: 'Grind',
    difficulty: 'Intermediate',
    description: 'Grinding on a rail with both trucks, approaching with the ledge towards your back.',
    variation: 'Switch Backside',
    tutorialLinks: [],
    status: 'Not Started'
  },
  {
    name: '50-50',
    trickType: 'Grind',
    difficulty: 'Intermediate',
    description: 'Grinding on a rail with both trucks, approaching with the ledge towards your front.',
    variation: 'Fakie Frontside',
    tutorialLinks: [],
    status: 'Not Started'
  },
  {
    name: '50-50',
    trickType: 'Grind',
    difficulty: 'Intermediate',
    description: 'Grinding on a rail with both trucks, approaching with the ledge towards your back.',
    variation: 'Fakie Backside',
    tutorialLinks: [],
    status: 'Not Started'
  },
  {
    name: '50-50',
    trickType: 'Grind',
    difficulty: 'Intermediate',
    description: 'Grinding on a rail with both trucks, approaching with the ledge towards your front.',
    variation: 'Nollie Frontside',
    tutorialLinks: [],
    status: 'Not Started'
  },
  {
    name: '50-50',
    trickType: 'Grind',
    difficulty: 'Intermediate',
    description: 'Grinding on a rail with both trucks, approaching with the ledge towards your back.',
    variation: 'Nollie Backside',
    tutorialLinks: [],
    status: 'Not Started'
  },
  {
    name: '5-0 Grind',
    trickType: 'Grind',
    difficulty: 'Intermediate',
    description: 'A grind on the back truck, with the front truck elevated, approaching with the ledge to your front.',
    variation: 'Regular Frontside',
    tutorialLinks: [],
    status: 'Not Started'
  },
  {
    name: '5-0 Grind',
    trickType: 'Grind',
    difficulty: 'Intermediate',
    description: 'A grind on the back truck, with the front truck elevated, approaching with the ledge to your back.',
    variation: 'Regular Backside',
    tutorialLinks: [],
    status: 'Not Started'
  },
  {
    name: '5-0 Grind',
    trickType: 'Grind',
    difficulty: 'Intermediate',
    description: 'A grind on the back truck, with the front truck elevated, approaching with the ledge to your front.',
    variation: 'Switch Frontside',
    tutorialLinks: [],
    status: 'Not Started'
  },
  {
    name: '5-0 Grind',
    trickType: 'Grind',
    difficulty: 'Intermediate',
    description: 'A grind on the back truck, with the front truck elevated, approaching with the ledge to your back.',
    variation: 'Switch Backside',
    tutorialLinks: [],
    status: 'Not Started'
  },
  {
    name: '5-0 Grind',
    trickType: 'Grind',
    difficulty: 'Intermediate',
    description: 'A grind on the back truck, with the front truck elevated, approaching with the ledge to your front.',
    variation: 'Fakie Frontside',
    tutorialLinks: [],
    status: 'Not Started'
  },
  {
    name: '5-0 Grind',
    trickType: 'Grind',
    difficulty: 'Intermediate',
    description: 'A grind on the back truck, with the front truck elevated, approaching with the ledge to your back.',
    variation: 'Fakie Backside',
    tutorialLinks: [],
    status: 'Not Started'
  },
  {
    name: '5-0 Grind',
    trickType: 'Grind',
    difficulty: 'Intermediate',
    description: 'A grind on the back truck, with the front truck elevated, approaching with the ledge to your front.',
    variation: 'Nollie Frontside',
    tutorialLinks: [],
    status: 'Not Started'
  },
  {
    name: '5-0 Grind',
    trickType: 'Grind',
    difficulty: 'Intermediate',
    description: 'A grind on the back truck, with the front truck elevated, approaching with the ledge to your back.',
    variation: 'Nollie Backside',
    tutorialLinks: [],
    status: 'Not Started'
  },
  {
    name: 'Nose Grind',
    trickType: 'Grind',
    difficulty: 'Advanced',
    description: 'Grinding on the front truck, with the back truck elevated, approaching with the ledge to your front.',
    variation: 'Regular Frontside',
    tutorialLinks: [],
    status: 'Not Started'
  },
  {
    name: 'Nose Grind',
    trickType: 'Grind',
    difficulty: 'Advanced',
    description: 'Grinding on the front truck, with the back truck elevated, approaching with the ledge to your back.',
    variation: 'Regular Backside',
    tutorialLinks: [],
    status: 'Not Started'
  },
  {
    name: 'Nose Grind',
    trickType: 'Grind',
    difficulty: 'Advanced',
    description: 'Grinding on the front truck, with the back truck elevated, approaching with the ledge to your front.',
    variation: 'Switch Frontside',
    tutorialLinks: [],
    status: 'Not Started'
  },
  {
    name: 'Nose Grind',
    trickType: 'Grind',
    difficulty: 'Advanced',
    description: 'Grinding on the front truck, with the back truck elevated, approaching with the ledge to your back.',
    variation: 'Switch Backside',
    tutorialLinks: [],
    status: 'Not Started'
  },
  {
    name: 'Nose Grind',
    trickType: 'Grind',
    difficulty: 'Advanced',
    description: 'Grinding on the front truck, with the back truck elevated, approaching with the ledge to your front.',
    variation: 'Fakie Frontside',
    tutorialLinks: [],
    status: 'Not Started'
  },
  {
    name: 'Nose Grind',
    trickType: 'Grind',
    difficulty: 'Advanced',
    description: 'Grinding on the front truck, with the back truck elevated, approaching with the ledge to your back.',
    variation: 'Fakie Backside',
    tutorialLinks: [],
    status: 'Not Started'
  },
  {
    name: 'Nose Grind',
    trickType: 'Grind',
    difficulty: 'Advanced',
    description: 'Grinding on the front truck, with the back truck elevated, approaching with the ledge to your front.',
    variation: 'Nollie Frontside',
    tutorialLinks: [],
    status: 'Not Started'
  },
  {
    name: 'Nose Grind',
    trickType: 'Grind',
    difficulty: 'Advanced',
    description: 'Grinding on the front truck, with the back truck elevated, approaching with the ledge to your back.',
    variation: 'Nollie Backside',
    tutorialLinks: [],
    status: 'Not Started'
  }
]

export default tricks;