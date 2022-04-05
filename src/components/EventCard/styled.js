import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    width: 18.75rem;
    height: 25rem;
    border: 1px solid var(--border-color);
    border-radius: 0.625rem;
    padding: 0.1875rem;
`;

export const Image = styled.img`
    width: 100%;
    height: 12.5rem;
    min-height: 12.5rem;;
    border-radius: 0.625rem;
    margin-bottom: 0.5rem;
`;

export const Informations = styled.div`
    padding: 0.5rem 0.75rem;
`;

export const Title = styled.h3`
    font-size: var(--font-3);
    font-weight: 500;
    margin-bottom: 0.75rem;
`;

export const Date = styled.p`
    color: var(--placeholder-color);
    font-size: var(--font-1);
    margin-bottom: 0.5rem;
`;

export const Locality = styled.p`
    color: var(--placeholder-color);
    font-size: var(--font-1);
    margin-bottom: 0.5rem;
`;

//export const Type = styled.p``;

export const Participants = styled.p`
    font-size: var(--font-1);
    margin-bottom: 1rem;
`;


export const Button = styled(Link)`
    font-size: var(--font-1);
    background-color: var(--success-color);
    text-decoration: none;
    color: var(--white-color);
    padding: 0.375rem 0.75rem;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
`;