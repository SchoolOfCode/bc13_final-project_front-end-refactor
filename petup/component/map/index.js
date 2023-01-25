import { MapContainer, Marker, Popup, TileLayer, Circle } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import { useState } from 'react'

const Map = ({sitterData, coordinates}) => {
  const [centerCoord, setCenterCoord] = useState({lat: coordinates[0], long: coordinates[1]});

  return (
        <MapContainer className= "container" center={[centerCoord.lat, centerCoord.long]} zoom={13} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {sitterData.map((user) => {        
        return (<Marker position={[user.latitude, user.longitude]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      )})}
      
      {/* <Circle center={[51.505, -0.09]} radius={200}></Circle> */}
    </MapContainer>
  )
}

export default Map;