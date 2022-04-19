import React from 'react';
import styled from 'styled-components/macro';

import { WEIGHTS } from '../../constants';

const DesktopNavLink = ({ href, children }) => {
    return (
        <Wrapper>
            <StyledLink href={href}>{children}</StyledLink>
            <BoldLink href={href}>{children}</BoldLink>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    position: relative;
    overflow: hidden;
    color: var(--color-gray-900);

    &:first-of-type {
        color: var(--color-secondary);
    }
`;

const StyledLink = styled.a`
    display: block;
    font-size: 1.125rem;
    text-transform: uppercase;
    text-decoration: none;
    font-weight: ${WEIGHTS.medium};
    color: inherit;

    @media (prefers-reduced-motion: no-preference) {
        transition: transform 300ms;
        ${Wrapper}:hover & {
            transform: translateY(-100%);
        }
    }
`;

const BoldLink = styled(StyledLink)`
    font-weight: ${WEIGHTS.bold};
    position: absolute;
    top: 100%;
    left: 0px;
`;

export default DesktopNavLink;
