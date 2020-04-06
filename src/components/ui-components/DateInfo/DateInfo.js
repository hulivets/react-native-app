/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import Icon from '../../ui-components/Icon';

import { getDateData } from '../../../utils/date';

const weatherConfig = {
    APIKEY: 'f3b069c2cd0679190e6719ada1f0d910',
    cityId: 703448,
};

const DataInfo = () => {
    const [dateData, setDateData] = useState({
        hours: 0,
        minutes: 0,
        date: 0,
        month: 0,
        day: 0,
        year: 0,
    });
    const [weatherData, setWeatherData] = useState({
        temperature: 0,
        icon: '01d',
    });

    useEffect(() => {
        const interval = setInterval(() => getTimeData(), 1000);
        const weatherInterval = setInterval(() => getWeatherData(), 60000);
        const intervalsList = [interval, weatherInterval];

        return () => intervalsList.forEach(int => clearInterval(int));
    }, []);

    const getWeatherData = async () => {
        const { APIKEY, cityId } = weatherConfig;

        const res = await fetch(
            `http://api.openweathermap.org/data/2.5/forecast?id=${cityId}&APPID=${APIKEY}`,
        );
        const { list } = await res.json();
        const temperature = Math.round(list[0].main.temp - 273.15);
        const icon = list[0].weather[0].icon;

        setWeatherData({
            temperature,
            icon,
        });
    };

    const getTimeData = () => {
        const { hours, minutes, date, month, day, year } = getDateData();

        setDateData({ hours, minutes, date, month, day, year });
    };

    const renderCurrentTime = () => {
        const { hours, minutes } = dateData;
        const ampm = hours >= 12 ? 'PM' : 'AM';
        const hoursByType = hours % 12;
        const hoursToSet = hoursByType < 10 ? `0${hoursByType}` : hoursByType;
        const minutesToSet = minutes < 10 ? `0${minutes}` : minutes;

        return (
            <Text style={styles.time}>
                {hoursToSet}:{minutesToSet} {ampm}
            </Text>
        );
    };

    const renderCurrentDate = () => {
        const { month, day, year, date } = dateData;
        const monthToSet = month ? month.slice(0, 3) : 'Sunday';
        return (
            <Text style={styles.currentDate}>
                {monthToSet}.{date}.{year} | {day}
            </Text>
        );
    };

    const renderWeather = () => {
        return (
            <View>
                <Icon width={20} height={20} type={weatherData.icon} />
                <Text style={styles.weather}>{weatherData.temperature}&#176; C</Text>
            </View>
        );
    };

    return (
        <View>
            <View style={styles.timeContainer}>
                {renderCurrentTime()}
                {renderWeather()}
            </View>
            <View>{renderCurrentDate()}</View>
        </View>
    );
};

export default DataInfo;

const styles = {
    timeContainer: {
        width: 187,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    time: {
        color: '#1B1D28',
        fontSize: 26,
        fontWeight: 'bold',
    },
    currentDate: {
        marginTop: 5,
        fontSize: 16,
        color: '#1B1D28',
    },
    weather: {
        color: '#1B1D28',
        fontSize: 18,
        fontWeight: 'bold',
    },
};
