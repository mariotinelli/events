import styled from 'styled-components'

export const FormTextArea = styled.textarea`
    width: 100%;
    border: none;
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
    border: 1px solid var(--border-color);
    background: transparent;

    &::placeholder {
        color: var(--placeholder-color);
        font-size: var(--font-1);
    }
`;