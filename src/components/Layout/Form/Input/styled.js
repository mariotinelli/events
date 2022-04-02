import styled from 'styled-components';

export const Label = styled.label`
    font-size: var(--font-1);
    margin-bottom: 0.5rem;
`;

export const FormInput = styled.input`
    width: 100%;
    border: none;
    padding: 12px;
    border-radius: 0.25rem;
    border: 1px solid var(--border-color);
    background: transparent;

    &::placeholder {
        color: var(--placeholder-color);
        font-size: var(--font-1);
    }
`;