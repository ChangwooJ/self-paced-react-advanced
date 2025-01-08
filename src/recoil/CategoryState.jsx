import { atom } from 'recoil';

const categoryState = atom({
  key: 'category',
  default: '전체',
});

export { categoryState };
