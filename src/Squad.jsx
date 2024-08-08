import { ListBox } from 'primereact/listbox'
import React, { useEffect, useState } from 'react'

export default function Squad({ team }) {

    const [goalkeepers, setgoalkeepers] = useState([])
    const [defenders, setdefenders] = useState([])
    const [midfielders, setmidfielders] = useState([])
    const [forwards, setforwards] = useState([])


    useEffect(() => {
        const goalkeepersOptions = team.players.filter(obj => obj.player_type === "Goalkeepers")
        setgoalkeepers(goalkeepersOptions.map(obj => { return { name: obj.player_number ? obj.player_number + '.' + obj.player_complete_name : obj.player_complete_name, value: obj.player_key } }))
        const defendersOptions = team.players.filter(obj => obj.player_type === "Defenders")
        setdefenders(defendersOptions.map(obj => { return { name: obj.player_number ? obj.player_number + '.' + obj.player_complete_name : obj.player_complete_name, value: obj.player_key } }))
        const midfieldersOptions = team.players.filter(obj => obj.player_type === "Midfielders")
        setmidfielders(midfieldersOptions.map(obj => { return { name: obj.player_number ? obj.player_number + '.' + obj.player_complete_name : obj.player_complete_name, value: obj.player_key } }))
        const forwardsOptions = team.players.filter(obj => obj.player_type === "Forwards")
        setforwards(forwardsOptions.map(obj => { return { name: obj.player_number ? obj.player_number + '.' + obj.player_complete_name : obj.player_complete_name, value: obj.player_key } }))
    }, [team])


    return (
        <>
            <h2>Kaleci</h2>
            <ListBox options={goalkeepers} optionLabel="name" />

            <h2>Defans</h2>
            <ListBox options={defenders} optionLabel="name" />

            <h2>Orta Saha</h2>
            <ListBox options={midfielders} optionLabel="name" />

            <h2>Forvet</h2>
            <ListBox options={forwards} optionLabel="name" />

        </>
    )
}
