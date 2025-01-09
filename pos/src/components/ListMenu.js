import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const MenuWrapper = styled.div`
  padding: 1rem;
`;

const MenuItem = styled.div`
  padding: 1rem;
  margin: 0.5rem 0;
  cursor: pointer;
  background: ${(props) =>
    props.active ? props.theme.bgPrimary : "transparent"};
  color: ${(props) => (props.active ? props.theme.light : props.theme.dark)};
  border-radius: 25px;
  border: 2px solid ${(props) => props.active ? props.theme.textPrimary : "transparent"};
  color: ${(props) => props.theme.textPrimary};
  transition: all 0.2s;

  &:hover {
    background: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.light};
  }
`;

const ListMenu = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  // Get unique categories from products
  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    dispatch({
      type: "FILTER_PRODUCTS",
      payload: {
        category: category === "All" ? null : category,
        searchTerm,
      },
    });
  };

  // const handleSearch = (e) => {
  //   const value = e.target.value;
  //   setSearchTerm(value);
  //   dispatch({
  //     type: "FILTER_PRODUCTS",
  //     payload: {
  //       category: activeCategory === "All" ? null : activeCategory,
  //       searchTerm: value,
  //     },
  //   });
  // };

  return (
    <MenuWrapper>
      {/* <SearchInput
        type="text"
        placeholder="Search items..."
        value={searchTerm}
        onChange={handleSearch}
      /> */}
      {categories.map((category) => (
        <MenuItem
          key={category}
          active={activeCategory === category}
          onClick={() => handleCategoryClick(category)}
        >
          {category}
        </MenuItem>
      ))}
    </MenuWrapper>
  );
};

export default ListMenu;