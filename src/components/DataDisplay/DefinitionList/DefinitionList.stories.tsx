import type { Meta, StoryObj } from '@storybook/react';
import { DefinitionList, DefinitionTerm, DefinitionDescription } from './DefinitionList';

const meta: Meta<typeof DefinitionList> = {
  title: 'DataDisplay/DefinitionList',
  component: DefinitionList,
  tags: ['autodocs'],
  subcomponents: { DefinitionTerm, DefinitionDescription } as any,
};

export default meta;
type Story = StoryObj<typeof DefinitionList>;

export const Default: Story = {
  render: () => (
    <DefinitionList>
        <DefinitionTerm>Term 1</DefinitionTerm>
        <DefinitionDescription>Description for term 1.</DefinitionDescription>
        <DefinitionTerm>Term 2</DefinitionTerm>
        <DefinitionDescription>Description for term 2.</DefinitionDescription>
    </DefinitionList>
  ),
};
