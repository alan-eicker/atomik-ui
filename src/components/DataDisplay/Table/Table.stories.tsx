import type { Meta, StoryObj } from '@storybook/react';
import { Table, TableContainer, TableHead, TableBody, TableRow, TableHeaderCell, TableCell } from './Table';

const meta: Meta<typeof Table> = {
  title: 'DataDisplay/Table',
  component: Table,
  tags: ['autodocs'],
  subcomponents: { TableContainer, TableHead, TableBody, TableRow, TableHeaderCell, TableCell } as any,
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
  render: () => (
    <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableHeaderCell>Name</TableHeaderCell>
                    <TableHeaderCell>Age</TableHeaderCell>
                    <TableHeaderCell>Role</TableHeaderCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell>John Doe</TableCell>
                    <TableCell>28</TableCell>
                    <TableCell>Developer</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Jane Smith</TableCell>
                    <TableCell>34</TableCell>
                    <TableCell>Designer</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </TableContainer>
  ),
};
