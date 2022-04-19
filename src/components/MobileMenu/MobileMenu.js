/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { QUERIES, WEIGHTS } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import { keyframes } from 'styled-components';

const MobileMenu = ({ isOpen, onDismiss }) => {
    return (
        <Overlay isOpen={isOpen} onDismiss={onDismiss}>
            <OverlayBackground />
            <Content aria-label="Menu">
                <Wrapper>
                    <CloseButton onClick={onDismiss}>
                        <Icon id="close" />
                        <VisuallyHidden>Dismiss menu</VisuallyHidden>
                    </CloseButton>
                    <Filler />
                    <Nav>
                        <NavLink href="/sale">Sale</NavLink>
                        <NavLink href="/new">New&nbsp;Releases</NavLink>
                        <NavLink href="/men">Men</NavLink>
                        <NavLink href="/women">Women</NavLink>
                        <NavLink href="/kids">Kids</NavLink>
                        <NavLink href="/collections">Collections</NavLink>
                    </Nav>
                    <Footer>
                        <SubLink href="/terms">Terms and Conditions</SubLink>
                        <SubLink href="/privacy">Privacy Policy</SubLink>
                        <SubLink href="/contact">Contact Us</SubLink>
                    </Footer>
                </Wrapper>
            </Content>
        </Overlay>
    );
};

const fadeIn = keyframes`
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
`;

const slideInRight = keyframes`
    from {
        transform: translateX(100%);
    }

    to {
        transform: translateX(0%);
    }
`;

const Overlay = styled(DialogOverlay)`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: flex-end;
`;

const OverlayBackground = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--color-backdrop);
    animation: ${fadeIn} 400ms;
`;

const Content = styled(DialogContent)`
    position: relative;
    background: white;
    width: 300px;
    height: 100%;
    padding: 24px 32px;

    @media (prefers-reduced-motion: no-preference) {
        animation: ${slideInRight} 200ms both ease-out;
        animation-delay: 300ms;
    }
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    @media (prefers-reduced-motion: no-preference) {
        animation: ${fadeIn} 400ms both;
        animation-delay: 500ms;
    }
`;

const CloseButton = styled(UnstyledButton)`
    position: absolute;
    top: 10px;
    right: 0;
    padding: 16px;
`;

const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

const NavLink = styled.a`
    color: var(--color-gray-900);
    font-weight: ${WEIGHTS.medium};
    text-decoration: none;
    font-size: 1.125rem;
    text-transform: uppercase;

    &:first-of-type {
        color: var(--color-secondary);
    }
`;

const Filler = styled.div`
    flex: 1;
`;
const Footer = styled.footer`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 14px;
    justify-content: flex-end;
`;

const SubLink = styled.a`
    color: var(--color-gray-700);
    font-size: 0.875rem;
    text-decoration: none;
`;

export default MobileMenu;
