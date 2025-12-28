import { render, screen } from '@testing-library/react';
import { DefinitionList, DefinitionTerm, DefinitionDescription } from './DefinitionList';

describe('DefinitionList', () => {
    it('renders definition list structure', () => {
        render(
            <DefinitionList>
                <DefinitionTerm>Term</DefinitionTerm>
                <DefinitionDescription>Desc</DefinitionDescription>
            </DefinitionList>
        );

        const list = screen.getByText('Term').parentElement;
        expect(list?.tagName).toBe('DL');
        expect(screen.getByText('Term').tagName).toBe('DT');
        expect(screen.getByText('Desc').tagName).toBe('DD');
    });
});
