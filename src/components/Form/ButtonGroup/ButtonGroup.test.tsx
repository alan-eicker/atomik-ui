import { render, screen } from '@testing-library/react';
import { ButtonGroup } from './ButtonGroup';

describe('ButtonGroup', () => {
    it('renders children', () => {
        render(
            <ButtonGroup>
                <button>One</button>
                <button>Two</button>
            </ButtonGroup>
        );
        expect(screen.getByText('One')).toBeInTheDocument();
        expect(screen.getByText('Two')).toBeInTheDocument();
    });

    it('has group role', () => {
        render(
            <ButtonGroup>
                <button>Btn</button>
            </ButtonGroup>
        );
        expect(screen.getByRole('group')).toBeInTheDocument();
    });
});
