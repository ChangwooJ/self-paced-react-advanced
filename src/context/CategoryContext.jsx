import { createContext, useState } from 'react';

const CategoryContext = createContext();

const CategoryProvider = ({ children }) => {
  const [category, setCategory] = useState('전체');

  const value = {
    state: { category },
    action: { setCategory },
  };

  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
};

const { Consumer: CategoryConsumer } = CategoryContext;

export { CategoryProvider, CategoryConsumer };

export default CategoryContext;
