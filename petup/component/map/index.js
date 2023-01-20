import { MapContainer, Marker, Popup, TileLayer, Circle } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'



// , // wigan
const Map = ({sitterData}) => {
  // const mapData = [
  //   { 
  //     lat: 51.51013,
  //     long: -0.118605,
  //   },
  //   { lat: 51.510077,
  //     long: -0.118708,
  //   },
  //   { 
  //     lat: 51.50998,
  //     long: -0.117098,
  //   },
  //   { 
  //     lat: 51.509981,
  //     long: -0.117073,
  //   },
  //   { 
  //     lat: 51.510557,
  //     long: -0.118919,
  //   },
  //   // wigan coord
  //   { 
  //     lat: 53.534858,
  //     long: -2.496583,
  //   },
  // ]
  
  return (
        <MapContainer className= "container" center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
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