// Custom hook to use state from previous mount, inspired by Sam Selikoff's tutorial:
// https://youtu.be/aV2YJuxQ2vo

import { useState } from 'react';

export default function usePrevious(state) {
  const [tuple, setTuple] = useState([null, state]);

  if (tuple[1] !== state) {
    setTuple([tuple[1], state]);
  }

  return tuple[0];
}
