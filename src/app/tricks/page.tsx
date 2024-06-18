'use client';
import TricksList from '@/components/Tricks/TricksList';
import { Trick } from '../../../types/types';
import {TricksContext} from '../../context/context';
import { useContext } from 'react';

async function Page() {
  const tricks = useContext(TricksContext);
  return (
    <div>
    <TricksList tricks={tricks}/>
    </div>
  )
}

export default Page;