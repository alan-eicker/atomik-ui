import type { Meta, StoryObj } from '@storybook/react-vite';
import { Accordion, AccordionItem, AccordionHeader, AccordionPanel } from './Accordion';

const meta: Meta<typeof Accordion> = {
  title: 'Disclosure/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  subcomponents: { AccordionItem, AccordionHeader, AccordionPanel } as any,
  argTypes: {
    allowMultiple: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  args: {
    children: (
        <>
            <AccordionItem id="item1">
                <AccordionHeader id="item1">Section 1</AccordionHeader>
                <AccordionPanel id="item1">Content for section 1.</AccordionPanel>
            </AccordionItem>
            <AccordionItem id="item2">
                <AccordionHeader id="item2">Section 2</AccordionHeader>
                <AccordionPanel id="item2">Content for section 2.</AccordionPanel>
            </AccordionItem>
        </>
    ),
  },
};

export const AllowMultiple: Story = {
    args: {
        allowMultiple: true,
        children: (
            <>
                <AccordionItem id="item1">
                    <AccordionHeader id="item1">Section 1</AccordionHeader>
                    <AccordionPanel id="item1">Content for section 1.</AccordionPanel>
                </AccordionItem>
                <AccordionItem id="item2">
                    <AccordionHeader id="item2">Section 2</AccordionHeader>
                    <AccordionPanel id="item2">Content for section 2.</AccordionPanel>
                </AccordionItem>
            </>
        ),
    },
  };
