import styled from 'styled-components'

//import {Button as ButtonMUI} from '@mui/material/Button';

export const EventComponent = styled.section`
    margin-top: 3rem;
    margin-inline: auto;
    display: flex;
    width: 56.25rem;
    flex-wrap: wrap;
`;

export const DataContainer = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    margin-left: 2.5rem;
`;

export const Image = styled.img`
    height: 15.625rem;
    width: auto;
    border-radius: 0.625rem;
`;

export const Data = styled.div`
    display: flex;
    margin-bottom: 3.125rem;
`;

export const Title = styled.h1`
    font-size: var(--font-4);
    margin-bottom: 1.5rem;
`;

export const Infos = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const Info = styled.p`
    font-size: var(--font-1);
`;

export const Description = styled.p`
    margin-top: 1rem;
    padding-right: 3.75rem;
    font-size: var(--font-1);
`;