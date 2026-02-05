import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { SEO } from '@components';

const StyledMainContainer = styled.main`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
`;

const StyledTitle = styled.h1`
  color: var(--green);
  font-family: var(--font-mono);
  font-size: clamp(100px, 25vw, 200px);
  line-height: 1;
`;

const StyledSubtitle = styled.h2`
  font-size: clamp(30px, 5vw, 50px);
  font-weight: 400;
`;

const StyledHomeButton = styled(Link)`
  ${({ theme }) => theme.mixins.bigButton};
  margin-top: 40px;
`;

export default function NotFoundPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <SEO title="Page Not Found" />

      <StyledMainContainer className="fillHeight">
        {isMounted && (
          <>
            <StyledTitle>404</StyledTitle>
            <StyledSubtitle>Page Not Found</StyledSubtitle>
            <StyledHomeButton href="/">Go Home</StyledHomeButton>
          </>
        )}
      </StyledMainContainer>
    </>
  );
}
