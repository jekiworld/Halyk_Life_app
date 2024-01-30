import React from 'react';

const KazakhstanCities = () => {
    const kazakhstanCities = [
        "Алматы",
        "Нур-Султан",
        "Шымкент",
        "Караганда",
        "Актобе",
        "Тараз",
        "Павлодар",
        "Усть-Каменогорск",
        "Семей",
        "Атырау",
        "Костанай",
        "Петропавловск",
        "Уральск",
        "Темиртау",
        "Кызылорда",
        "Актау",
        "Туркестан",
        "Кокшетау",
        "Экибастуз",
        "Рудный",
        "Талдыкорган",
        "Жезказган",
        "Аксай",
    ];

    return (
        <>
            <option value="">Выберите город</option>
            {kazakhstanCities.map(city => (
                <option key={city} value={city}>{city}</option>
            ))}
        </>
    );
};

export default KazakhstanCities;