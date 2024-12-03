import React, { useMemo } from 'react'
import useFetch from './customHook/useFetch'
import { Image } from 'primereact/image';
import { Accordion, AccordionTab } from 'primereact/accordion';
import Info from './Info';
import Squad from './Squad';
import Fixture from './Fixture';

export default function AppSidebar() {
    const teams = useFetch('./basaksehir.json');
    const fixtures = useFetch('./fixtures.json');
    const [fixtures2] = useFetch('https://v3.football.api-sports.io/fixtures?team=564&season=2024');
    const [teams2] = useFetch('https://v3.football.api-sports.io/players/squads?team=564');
    const team = teams2?.response?.[0];
    const fixture = useMemo(() => {
        const fixtures = fixtures2?.response?.sort((a, b) => new Date(a.fixture.date) - new Date(b.fixture.date))
        return fixtures;
    }, [fixtures2])

    return (
        <>
            {team && fixture && <div className='flex flex-column w-30rem p-3 overflow-auto'>
                <div className='flex justify-content-start align-items-center'>
                    <Image src={team.team.logo} alt="Image" width="50" />
                    <h2 className='m-0'>{team.team.name}</h2>
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
