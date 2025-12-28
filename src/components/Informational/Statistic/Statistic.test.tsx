import { render, screen } from '@testing-library/react';
import { Statistic } from './Statistic';

describe('Statistic', () => {
    it('renders title and value', () => {
        render(<Statistic title="Total" value={100} />);
        expect(screen.getByText('Total')).toBeInTheDocument();
        expect(screen.getByText('100')).toBeInTheDocument();
    });

    it('renders prefix and suffix', () => {
        render(<Statistic title="Percent" value={50} prefix="~" suffix="%" />);
        expect(screen.getByText('~')).toBeInTheDocument();
        expect(screen.getByText('%')).toBeInTheDocument();
    });
});
