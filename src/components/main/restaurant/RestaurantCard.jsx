import styled from 'styled-components';
import korean_icon from '../../../assets/category/category-korean.png';
import asian_icon from '../../../assets/category/category-asian.png';
import chinese_icon from '../../../assets/category/category-chinese.png';
import etc_icon from '../../../assets/category/category-etc.png';
import japanese_icon from '../../../assets/category/category-japanese.png';
import western_icon from '../../../assets/category/category-western.png';

const getCategoryIcon = (alt) => {
  switch (alt) {
    case '한식':
      return korean_icon;
    case '중식':
      return chinese_icon;
    case '아시안':
      return asian_icon;
    case '일식':
      return japanese_icon;
    case '양식':
      return western_icon;
    case '기타':
      return etc_icon;
  }
};

const RestaurantCard = ({
  alt,
  name,
  description,
  setIsModalOpen,
  setSelectedRestaurant,
}) => {
  const image = getCategoryIcon(alt);

  const handleCardClick = () => {
    setIsModalOpen(true);
    setSelectedRestaurant({ name, description });
  };

  return (
    <RestaurantCardBox onClick={handleCardClick}>
      <CategoryBox>
        <img src={image} alt={alt} />
      </CategoryBox>
      <RestaurantInfoBox>
        <RestaurantName>{name}</RestaurantName>
        <RestaurantDescription>{description}</RestaurantDescription>
      </RestaurantInfoBox>
    </RestaurantCardBox>
  );
};

export default RestaurantCard;

const RestaurantCardBox = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 16px 8px;
  border-bottom: 1px solid #e9eaed;
`;

const CategoryBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 64px;
  min-width: 64px;
  min-height: 64px;
  margin-right: 16px;
  border-radius: 50%;
  background: ${(props) => props.theme.lightenColor};

  & > img {
    width: 36px;
    height: 36px;
  }
`;

const RestaurantInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const RestaurantName = styled.h3`
  margin: 0;
  font-size: 18px;
  line-height: 28px;
  font-weight: 600;
`;

const RestaurantDescription = styled.p`
  display: -webkit-box;
  padding-top: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
`;
