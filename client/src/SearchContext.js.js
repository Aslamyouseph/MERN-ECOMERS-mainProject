// This file is used to create a React Context API to share the search input value across multiple components in your app  without passing props manually through every level
/*You created a centralized state (search and setSearch) that any component can access. So, instead of passing search and setSearch down via props, you just wrap your app 
 in the SearchProvider and use useContext() wherever you want to access or update the search value.*/

import React, { createContext, useState } from "react";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState("");

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
};
