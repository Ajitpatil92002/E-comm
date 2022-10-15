import styled from "styled-components";
import { categories } from "../data";
import CategorieItem from "./categorieItem";

const Conatiner = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;

const Categories = () => {
  return (
    <Conatiner>
      {categories.map((item) => (
        <CategorieItem item={item} key={item.id} />
      ))}
    </Conatiner>
  );
};

export default Categories;
