/* eslint-disable curly */
import React from 'react';
import PropTypes from 'prop-types';

import SvgUri from 'react-native-svg-uri';

import clearSkyDay from '../../../assets/weather_icons/01d.svg';
import clearSkyNight from '../../../assets/weather_icons/01n.svg';
import fewCloudsDay from '../../../assets/weather_icons/02d.svg';
import fewCloudsNight from '../../../assets/weather_icons/02n.svg';
import scatteredCloudsDay from '../../../assets/weather_icons/03d.svg';
import scatteredCloudsNight from '../../../assets/weather_icons/03n.svg';
import brokenCloudsDay from '../../../assets/weather_icons/04d.svg';
import brokenCloudsNight from '../../../assets/weather_icons/04n.svg';
import showerRainDay from '../../../assets/weather_icons/09d.svg';
import showerRainNight from '../../../assets/weather_icons/09n.svg';
import rainDay from '../../../assets/weather_icons/10d.svg';
import rainNight from '../../../assets/weather_icons/10n.svg';
import thunderstormDay from '../../../assets/weather_icons/11d.svg';
import thunderstormNight from '../../../assets/weather_icons/11n.svg';
import snowDay from '../../../assets/weather_icons/13d.svg';
import snowNight from '../../../assets/weather_icons/13n.svg';
import mistDay from '../../../assets/weather_icons/50d.svg';
import mistNight from '../../../assets/weather_icons/50n.svg';

const ICONS = {
    '01d': clearSkyDay,
    '01n': clearSkyNight,
    '02d': fewCloudsDay,
    '02n': fewCloudsNight,
    '03d': scatteredCloudsDay,
    '03n': scatteredCloudsNight,
    '04d': brokenCloudsDay,
    '04n': brokenCloudsNight,
    '09d': showerRainDay,
    '09n': showerRainNight,
    '10d': rainDay,
    '10n': rainNight,
    '11d': thunderstormDay,
    '11n': thunderstormNight,
    '13d': snowDay,
    '13n': snowNight,
    '50d': mistDay,
    '50n': mistNight,
};

console.log(ICONS)

export default function Icon({ width, height, type, fill }) {
    const svgXmlData = ICONS[type] || null;

    if (!svgXmlData) return null;

    return (
        <SvgUri
            width={width}
            height={height}
            fill={fill}
            svgXmlData={svgXmlData}
        />
    );
}

Icon.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    fill: PropTypes.string,
    type: PropTypes.string.isRequired,
};

Icon.defaultProps = {
    width: 20,
    height: 20,
    fill: null,
};
