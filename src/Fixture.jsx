import { Image } from 'primereact/image';
import React from 'react'

export default function Fixture({ fixture }) {
    return (
        <>
            {fixture.map(obj =>
                <div key={obj.fixture.id} className='border-1 border-round-sm border-primary p-2 flex flex-column justify-content-between mb-2'>
                    <div>{new Date(obj.fixture.date).toLocaleString('tr').substring(0, 16)}</div>
                    <div></div>
                    <div className='flex align-items-center justify-content-between gap-3'>
                        <div className='flex align-items-center'>
                            <Image src={obj.teams.home.logo} width='30' />
                            <div>{obj.teams.home.name}</div>
                        </div>
                        <div>{obj.goals.home}</div>
                    </div>
                    <div className='flex align-items-center justify-content-between gap-3'>
                        <div className='flex align-items-center'>
                            <Image src={obj.teams.away.logo} width='30' />
                            <div>{obj.teams.away.name}</div>
                        </div>
                        <div>{obj.goals.away}</div>
                    </div>
                </div>
            )}
        </>
    )
}
