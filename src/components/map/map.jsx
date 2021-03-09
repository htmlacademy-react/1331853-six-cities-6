import React, {useEffect, useRef} from 'react';

import {PropTypes} from 'prop-types';
import {offersPropValid} from '../offer-list/offer-card/offer-card.prop';

import leaflet from 'leaflet';
import "leaflet/dist/leaflet.css";
import {MAP_CLASS_NAME} from '../../const';
import {connect} from 'react-redux';


const Map = ({offers, mode, city, activeOffer}) => {

  if (!offers.length) {
    return ``;
  }

  const mapRef = useRef();
  const cityLocation = offers[0].city.location;

  useEffect(() => {
    mapRef.current = leaflet.map(`map`, {
      center: {
        lat: cityLocation.latitude,
        lng: cityLocation.longitude
      },
      zoom: cityLocation.zoom,
      zoomControl: false
    });
    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(mapRef.current);

    offers.forEach((point) => {
      const customIcon = leaflet.icon({
        iconUrl: `${activeOffer !== point.id ? `./img/pin.svg` : `./img/pin-active.svg`}`,
        iconSize: [27, 39],
      });

      leaflet.marker({
        lat: point.location.latitude,
        lng: point.location.longitude,
      },
      {
        icon: customIcon
      })
        .addTo(mapRef.current)
        .bindPopup(point.title);
    });

    return () => {
      mapRef.current.remove();
    };

  }, [city, activeOffer]);

  return (
    <section id="map" className={`${MAP_CLASS_NAME[mode]} map`} style={mode === `OFFER` && {width: `1144px`, margin: `auto auto 50px auto`}} ref={mapRef}/>
  );
};

Map.propTypes = {
  offers: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.shape(offersPropValid)), PropTypes.bool]).isRequired,
  mode: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  activeOffer: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]).isRequired
};
const mapStateToProps = ({activeOffer}) => ({
  activeOffer
});

export {Map};
export default connect(mapStateToProps, null)(Map);

