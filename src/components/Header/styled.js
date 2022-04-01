import styled from 'styled-components'

export const HeaderComponent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 4.6875rem;
    height: 72px;
    background-color: var(--background-header);
`;

export const Logo = styled.img`
    height: 1.8125rem;
    width: auto;
`;

export const Search = styled.div`
    display: flex;
    gap: 0.3125rem;
    height: 2.25rem;
`;

export const Input = styled.input`
    width: 23.4375rem;
    border: none;
    border-radius: 0.25rem;
    outline: none;
    padding: 0.375rem 0.75rem;

    &::placeholder {
        color: var(--placeholder-color);
        font-size: var(--font-1);
    }
`;

export const Button = styled.button`
    border: none;
    border-radius: 0.25rem;
    padding: 0.375rem 0.75rem;
    background: var(--button-search);
    color: var(--white-color);
`;

export const Navbar = styled.nav`
    display: flex;
    gap: 1rem;

    & .navlink {
        color: var(--placeholder-color);
        font-size: var(--font-1);
        text-decoration: none;
    }
`;