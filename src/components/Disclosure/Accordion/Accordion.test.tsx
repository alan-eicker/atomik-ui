import { render, screen, fireEvent } from '@testing-library/react';
import { Accordion, AccordionItem, AccordionHeader, AccordionPanel } from './Accordion';

describe('Accordion', () => {
    it('toggles visibility of panels', () => {
        render(
            <Accordion>
                <AccordionItem id="1">
                    <AccordionHeader id="1">Header 1</AccordionHeader>
                    <AccordionPanel id="1">Content 1</AccordionPanel>
                </AccordionItem>
            </Accordion>
        );

        // Initially closed (check via class or visibility, here we depend on class 'open' logic in style mock)
        // Since we don't load CSS modules in test env fully, we rely on checking if the class 'open' is present or checking style display
        // However, JSDOM doesn't compute styles perfectly from CSS modules without setup.
        // We will check for the class name modification which our code does.
        
        const panel = screen.getByText('Content 1');
        const header = screen.getByText('Header 1');

        expect(panel.className).not.toContain('open');

        fireEvent.click(header);

        expect(panel.className).toContain('open');

        fireEvent.click(header);

        expect(panel.className).not.toContain('open');
    });

    it('supports multiple open items', () => {
         render(
            <Accordion allowMultiple>
                <AccordionItem id="1">
                    <AccordionHeader id="1">Header 1</AccordionHeader>
                    <AccordionPanel id="1">Content 1</AccordionPanel>
                </AccordionItem>
                <AccordionItem id="2">
                    <AccordionHeader id="2">Header 2</AccordionHeader>
                    <AccordionPanel id="2">Content 2</AccordionPanel>
                </AccordionItem>
            </Accordion>
        );

        fireEvent.click(screen.getByText('Header 1'));
        fireEvent.click(screen.getByText('Header 2'));

        expect(screen.getByText('Content 1').className).toContain('open');
        expect(screen.getByText('Content 2').className).toContain('open');
    });
});
