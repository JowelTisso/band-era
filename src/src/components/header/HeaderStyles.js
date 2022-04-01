const activeLink = {
  borderBottom: "2px solid #e7e7e4",
};

export const activeLinkStyle = ({ isActive }) =>
  isActive ? activeLink : undefined;
