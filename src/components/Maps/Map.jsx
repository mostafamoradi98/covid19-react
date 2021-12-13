import { useState } from 'react';
import { MapContainer, TileLayer, useMap, Circle, Popup } from 'react-leaflet'
import styles from './Map.module.css';
import { useSelector } from 'react-redux';
import numeral from 'numeral'
import { useEffect } from 'react';

const ChangeView = ({ center, zoom }) => {
    const map = useMap();
    map.setView(center, zoom)
    return null
}

const Map = () => {
    const [mapCenter, setMapCenter] = useState();
    const [mapZoom, setMapZoom] = useState(3)

    const { countryInfo } = useSelector(state => state.covid)
    const countries = useSelector(state => state.countries)

    useEffect(() => {
        if (!countryInfo) {
            return setMapCenter([34.80746, -40.4796])
        }
        else {
            setMapCenter([countryInfo.lat, countryInfo.long])
            setMapZoom(4)
        }
    }, [countryInfo])

    if (!countries) return "...loding"

    return (
        <div className={styles.map}>
            <MapContainer center={mapCenter} zoom={mapZoom} scrollWheelZoom={false}>
                <ChangeView center={mapCenter} zoom={mapZoom} />
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {
                    countries.map((country, index) => (
                        <Circle
                            key={index}
                            center={[
                                country.countryInfo.lat,
                                country.countryInfo.long
                            ]}
                            fillOpacity={0.2}
                            color="#cc1034"
                            fillColor="#cc1034"
                            radius={Math.sqrt(country.cases) * 150}

                        >
                            <Popup>
                                <div className={styles.infoContainer}>
                                    <div
                                        className={styles.infoFlag}
                                        style={{
                                            backgroundImage: `url(${country.countryInfo.flag})`
                                        }}
                                    />
                                    <div className={styles.infoName}>
                                        {country.country}
                                    </div>
                                    <div className={styles.infoCases}>
                                        مبتلا شدگان: :{numeral(country.cases).format('0,0')}
                                    </div>
                                    <div className={styles.infoRecovered}>
                                        بهبود یافتگان : {numeral(country.recovered).format('0,0')}
                                    </div>
                                    <div className={styles.Deaths}>
                                        فوت شدگان :{numeral(country.deaths).format('0,0')}
                                    </div>
                                </div>
                            </Popup>
                        </Circle>
                    ))
                }
            </MapContainer>
        </div>
    );
}

export default Map;
