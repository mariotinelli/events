import styled from 'styled-components'

export const MyEventsContainer = styled.section`
    margin-top: 3.125rem;
    width: 80%;
    margin-inline: auto;

    & .MuiButtonBase-root:hover {
        background-color: black;
    }
`;

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
`;

export const Thead = styled.thead`
    
`;

export const Tr = styled.tr`

`;

export const Th = styled.th`
    text-align: start;
    border-bottom: 2px solid #000;
    padding: 0.375rem 0.75rem;
`;

export const Tbody = styled.tbody``;

export const Td = styled.td`
    padding: 0.75rem 0.75rem;
    border-bottom: 1px solid #0005;
`;
