import React, {useEffect, useRef} from 'react';

import {PropTypes} from 'prop-types';
import {offersPropValid} from '../offer-list/offer-card/offer-card.prop';

import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {MAP_CLASS_NAME} from '../../const';
import {useSelector} from 'react-redux';

const Map = ({offers, mode, city}) => {

  if (!offers.length) {
    return ``;
  }
  const mapRef = useRef();
  const {activeOffer} = useSelector((state) => state.MAIN);

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
    return () => {
      mapRef.current.remove();
    };

  }, [city]);

  useEffect(() => {
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
  }, [activeOffer, city]);

  return (
    <section id="map" className={`${MAP_CLASS_NAME[mode]} map`} style={{width: `${mode === `OFFER` && `1144px`}`, margin: `${mode === `OFFER` && `auto auto 50px auto`}`}} />
  );
};

Map.propTypes = {
  offers: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.shape(offersPropValid)), PropTypes.bool]).isRequired,
  mode: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
};


export default Map;

