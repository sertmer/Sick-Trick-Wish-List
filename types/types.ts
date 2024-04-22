export interface Trick {
  name: string;
  trickType: string;  
  difficulty: string;  
  description: string;
  variation: string;
  tutorialLinks: string[];
  status: string;
  trickId: number;  
}

// link to /tricks/id
// grab that id from the params, 
// find the correct id trick
// render that at the right url