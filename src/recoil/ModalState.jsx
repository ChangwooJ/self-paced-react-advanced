import { atom } from 'recoil';

const detailModalState = atom({
  key: 'detailModal',
  default: false,
});

const addModalState = atom({
  key: 'addModal',
  default: false,
});

export { detailModalState, addModalState };
