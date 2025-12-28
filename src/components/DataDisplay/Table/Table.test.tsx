import { render, screen } from '@testing-library/react';
import { Table, TableContainer, TableHead, TableBody, TableRow, TableHeaderCell, TableCell } from './Table';

describe('Table', () => {
    it('renders table structure', () => {
        render(
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableHeaderCell>Header 1</TableHeaderCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>Cell 1</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        );

        expect(screen.getByRole('table')).toBeInTheDocument();
        expect(screen.getByText('Header 1').tagName).toBe('TH');
        expect(screen.getByText('Cell 1').tagName).toBe('TD');
    });
});
