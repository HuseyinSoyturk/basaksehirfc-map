import React from 'react'
import useFetch from './customHook/useFetch'
import { Sidebar } from 'primereact/sidebar';
import { Image } from 'primereact/image';
import { Accordion, AccordionTab } from 'primereact/accordion';
import Info from './Info';
import Squad from './Squad';
import Fixture from './Fixture';

export default function AppSidebar() {
    const teams = useFetch('./basaksehir.json');
    const fixtures = useFetch('./fixtures.json');
    const team = teams?.[0]?.[0];
    const fixture = fixtures?.[0]?.response?.sort(function (a, b) {
        return new Date(a.fixture.date) - new Date(b.fixture.date);
    });
    return (
        <>
            {team && fixture && <div className='flex flex-column w-30rem p-3 overflow-auto'>
                <div className='flex justify-content-start align-items-center'>
                    <Image src={team.team_badge} alt="Image" width="50" />
                    <h2 className='m-0'>{team.team_name}</h2>
                </div>
                <Accordion activeIndex={0}>
                    <AccordionTab header="Fikstür">
                        <Fixture fixture={fixture} />
                    </AccordionTab>
                    <AccordionTab header="Kadro">
                        <Squad team={team} />
                    </AccordionTab>
                    <AccordionTab header="Genel Bilgi">
                        <Info />
                    </AccordionTab>
                </Accordion>
            </div>}
        </>
    )
}
