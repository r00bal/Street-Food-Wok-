import React from 'react';
import GoogleMapReact from 'google-map-react';
import styled from 'styled-components';
import { headerFont } from '../utilities'
import localization from '../assets/img/marker.png'
const Marker = ({ children }) => children

const StyledMarker = styled.p`
font-size:1rem;
${headerFont};
text-align: center;
width:70px;
.MarkerImg {
 width:40px;
}
`

function GoogleMap() {
  return (
    // Important! Always set the container height explicitly
    <div style={{
      height: '60vh', width: '60%', margin: '0 auto', marginBottom: '5rem'
    }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.GATSBY_GOOGLE_MAPS_API }}
        defaultCenter={{ lat: 54.51, lng: 18.55 }}
        defaultZoom={15}
      >
        <Marker
          lat="54.513008"
          lng="18.550399"
        >
          <StyledMarker>
            <img src={localization} alt="localisation" className="MarkerImg" />
      STREET WOK</StyledMarker>

        </Marker>
      </GoogleMapReact>
    </div>
  );

}

export default GoogleMap;