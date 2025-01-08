import {selector} from 'recoil';

export const getRestaurantsSelector = selector({
    key: 'GetRestaurantsSelector',
    get: async () => {
        try {
            const response = await fetch("http://localhost:3000/restaurants");
            return await response.json();
        } catch (error) {
            alert("레스토랑 데이터를 가져오는데 문제가 발생했습니다.\n" + error);
        }
    }
})