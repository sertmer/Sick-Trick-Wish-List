import TricksList from '@/components/Tricks/TricksList';
import tricks from '../../../data/tricks';

const Page = () => {
  return (
    <div>
    <p>all tricks</p>
    <TricksList tricks={tricks} />
    </div>
  )
}

export default Page;