import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion'

const ForeCast = ({ data }) => {
    return (
        <>
            <label className="title">Daitly</label>
            <Accordion allowZeroExpanded>
                {data.list.splice(0, 7).map((item, idx) => {
                    <AccordionItem>
                        <AccordionItemHeading></AccordionItemHeading>
                        <AccordionItemPanel></AccordionItemPanel>
                    </AccordionItem>
                })}
            </Accordion>
        </>
    )
}

export default ForeCast