import React from 'react'
import TileLayer from 'ol/layer/Tile';
import { OSM } from 'ol/source';
import { Map, View } from 'ol';
import { useEffect } from 'react';

export default function OlMap() {
    useEffect(() => {
        const map = new Map({
            target: 'map',
            layers: [
                new TileLayer({
                    source: new OSM(),
                }),
            ],
            view: new View({
                center: [3206980.8179, 5030477.0249],
                zoom: 17,
            }),
        })

        return () => {
            if (map) {
                map.dispose()
            }
        }
    }, [])

    return (
        <div className='map' id='map'></div>
    )
}
