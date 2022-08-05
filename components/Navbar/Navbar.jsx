import React, { useState } from "react";
import styled from "styled-components";
import { SiStyledcomponents } from "react-icons/si";
import Link from "next/link.js";

const links = [
    {
        name: "inputs",
        comps: ["button", "checkbox", ""]
    }
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <NavbarWrapper isOpen={isOpen}>
            <LogoWrapper>
                <SiStyledcomponents />
                <p>myStyledcomps</p>
            </LogoWrapper>
            <LinksWrapper>
                {links.map(section => {
                    return (
                        <SectionWrapper key={section.name}>
                            <p>{section.name}</p>
                            <div>
                                {section.comps.map(link => (
                                    <Link href={`comps/${link}`} key={link}>
                                        {link}
                                    </Link>
                                ))}
                            </div>
                        </SectionWrapper>
                    );
                })}
            </LinksWrapper>
        </NavbarWrapper>
    );
};

export default Navbar;

const NavbarWrapper = styled.div`
    position: absolute;
    top: 0;
    left: ${props => (props.isOpen ? 0 : "-20rem")};
    bottom: 0;
    width: 20rem;
    transition: all 0.2s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.accent};
`;

const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    > svg {
        font-size: 3.6rem;
    }
    > p {
        font-size: 1.6rem;
    }
    border-bottom: ${props => `2px solid ${props.theme.colors.secondary}`};
`;

const LinksWrapper = styled.div``;
const SectionWrapper = styled.div`
    > p {
        text-transform: capitalize;
        font-size: 1.4rem;
        padding: 0.25rem;
        padding-left: 1rem;
    }
    display: flex;
    flex-direction: column;
    > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        > a {
            padding: 0.25rem;
            font-size: 1.2rem;
            text-decoration: none;
            color: ${props => props.theme.colors.accent};
            width: 100%;
            text-align: center;
            :hover {
                background-color: ${props => props.theme.colors.secondary};
            }
        }
    }
`;
