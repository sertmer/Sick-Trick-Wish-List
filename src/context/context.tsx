'use client';
import React, { createContext, useState, useEffect } from 'react';
import { fetchTricks } from '../../data/data';
import { Trick } from '../../types/types';

export const TricksContext = createContext<Trick[]>([])

export const TricksProvider = ({ children }: { children: React.ReactNode }) => {
  const [tricks, setTricks] = useState<Trick[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTricks();
      setTricks(data)
    };

    fetchData();
  }, [])

  return (
    <TricksContext.Provider value={tricks}>
      {children}
    </TricksContext.Provider>
  )
}