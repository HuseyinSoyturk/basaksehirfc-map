import { ListBox } from 'primereact/listbox'
import React, { useEffect, useState } from 'react'

export default function Squad({ team }) {
    const [goalkeepers, setgoalkeepers] = useState([])
    const [defenders, setdefenders] = useState([])
    const [midfielders, setmidfielders] = useState([])
    const [forwards, setforwards] = useState([])


    useEffect(() => {
        const goalkeepersOptions = team.players.filter(obj => obj.position === "Goalkeeper")
        setgoalkeepers(goalkeepersOptions)
        const defendersOptions = team.players.filter(obj => obj.position === "Defender")
        setdefenders(defendersOptions)
        const midfieldersOptions = team.players.filter(obj => obj.position === "Midfielder")
        setmidfielders(midfieldersOptions)
        const forwardsOptions = team.players.filter(obj => obj.position === "Attacker")
        setforwards(forwardsOptions)
    }, [team])

    const footballerTemplate = (option) => {
        return (
            <div className="flex align-items-center">
                <img alt={option.name} src={option.photo} style={{ width: '5rem', marginRight: '.5rem' }}/>
                <div>{option.name}</div>
            </div>
        );
    };

    return (
        <>
            <h2>Kaleci</h2>
            <ListBox itemTemplate={footballerTemplate} options={goalkeepers} optionLabel="name" />

            <h2>Defans</h2>
            <ListBox itemTemplate={footballerTemplate} options={defenders} optionLabel="name" />

            <h2>Orta Saha</h2>
            <ListBox itemTemplate={footballerTemplate} options={midfielders} optionLabel="name" />

            <h2>Forvet</h2>
            <ListBox itemTemplate={footballerTemplate} options={forwards} optionLabel="name" />

        </>
    )
}
