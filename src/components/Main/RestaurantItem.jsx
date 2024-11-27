import styled from "styled-components";

const RestaurantWrapper = styled.li`
    display: flex;
    align-items: flex-start;
    padding: 16px 8px;
    border-bottom: 1px solid #e9eaed;
`;

const RestaurantCategory = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 64px;
    height: 64px;
    min-width: 64px;
    min-height: 64px;
    margin-right: 16px;
    border-radius: 50%;
    background: var(--lighten-color);
`;

const CategoryIcon = styled.img`
    width: 36px;
    height: 36px;
`;

const RestaurantInfo = styled.div`
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

function RestaurantItem({ name, description, category, alt, onClick }) {
    return (
        <RestaurantWrapper onClick={onClick}>
          <RestaurantCategory>
            <CategoryIcon src={convertCategoryToImageSrc(category)} alt={alt}></CategoryIcon>
          </RestaurantCategory>
          <RestaurantInfo>
            <RestaurantName>{name}</RestaurantName>
            <RestaurantDescription>{description}</RestaurantDescription>
          </RestaurantInfo>
        </RestaurantWrapper>
    );
}

function convertCategoryToImageSrc(category) {
    switch (category) {
        case "아시안":
            return "../../templates/category-asian.png";
        case "중식":
            return "../../templates/category-chinese.png";
        case "기타":
            return "../../templates/category-etc.png";
        case "일식":
            return "../../templates/category-japanese.png";
        case "한식":
            return "../../templates/category-korean.png";
        case "양식":
            return "../../templates/category-western.png";
        default:
            alert("이미지 조회가 불가능합니다.");
    }
}

export default RestaurantItem;