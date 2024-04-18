import TricksList from '@/components/AllTricksPage/TricksList';
import tricks from '../../../data/tricks';

const AllTricksPage = () => {
  return (
    <div>
      <p>AllTricks page</p>
      <TricksList tricks={tricks}/>
    </div>
  )
}

export default AllTricksPage;
