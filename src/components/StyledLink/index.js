import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import styled from 'styled-components';

const Link = ({ children, to, className }) => {
  return (
    <GatsbyLink to={to} className={className}>
      {children}
    </GatsbyLink>
  );
};

export const StyledLink = styled(Link)``;
