import React, { useState } from 'react';
import './Submitforms.css';
import axios from 'axios';
import { useEffect } from 'react';
import CitySelect from '../info/CityKazakhstan/CitySelect';

const SubmitForm = () => {
    const [formData, setFormData] = useState({
        lastName: '',
        firstName: '',
        middleName: '',
        birthDate: '',
        gender: '',
        phone: '',
        iin: '',
        email: '',
        id_card: '',
        id_card_from: '',
        // country: 'Kazakhstan',
        // region: '',
        // city: '',
        // adress: '',
        file: null,
    });

    const [submitted, setSubmitted] = useState(false);

    // useEffect(() => {
    //     if (submitted) {
    //         alert('Отправлено успешно!');
    //     }
    // }, [submitted]);

    // fetch('https://halyklife-insurance-hospital.onrender.com/v1/submit', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(formData),
    // })
    //     .then((response) => response.json())
    //     .then((data) => {
    //         console.log('Successfully:', data);
    //         alert("Отправлено успешно!")
    //     })
    //     .catch((error) => {
    //         console.error('Error', error);
    //     });



    const handleChange = (e) => {
        const { name, value } = e.target;

        if (/(phone|iin|id_card)/.test(name) && !/^\d*$/.test(value)) {
            return;
        }

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData({
            ...formData,
            file: file,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formDataToSend = new FormData();

        for (const key in formData) {
            formDataToSend.append(key, formData[key]);
        }

        formDataToSend.append('file', formData.file);

        console.log('Отправленные данные:', formDataToSend);

        fetch('https://halyklife-insurance-hospital.onrender.com/v1/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Successfully:', data);
                setSubmitted(true);
            })
            .catch((error) => {
                console.error('Error', error);
            });


    };

    return (
        <form onSubmit={handleSubmit}>
            {submitted ? (
                <div className="success-message">Отправлено успешно!</div>
            ) : (
                <div className="main">
                    <div className='firstblock'>
                        <div className="firstandlast">
                            <label>
                                Фамилия:
                                <input type="text" className="lastName" name='lastName' value={formData.lastName} onChange={handleChange} />
                            </label>

                            <label>
                                Имя:
                                <input type="text" className="firstName" name='firstName' value={formData.firstName} onChange={handleChange} />
                            </label>
                        </div>

                        <label>
                            Отчество:
                            <input type="text" className="patronymic" name='middleName' value={formData.middleName} onChange={handleChange} />
                        </label>

                        <label>
                            Номер удостоверения личности:
                            <input type="text" name="id_card" value={formData.id_card} onChange={handleChange} />
                        </label>

                        <label>
                            Кем выдано:
                            <input type="text" name="id_card_from" value={formData.id_card_from} onChange={handleChange} />
                        </label>

                        <div className='birthinfo'>
                            <label>
                                Дата рождения:
                                <input type="date" className="birthDate" name='birthDate' value={formData.birthDate} onChange={handleChange} />
                            </label>

                            <label>
                                Пол:
                                <select className="gender" name='gender' value={formData.gender} onChange={handleChange}>
                                    <option value="">Выберите пол</option>
                                    <option value="male">Мужской</option>
                                    <option value="female">Женский</option>
                                </select>
                            </label>
                        </div>

                        <label>
                            Телефон:
                            <input type="tel" className="phone" name='phone' value={formData.phone} onChange={handleChange} />
                        </label>

                        <label>
                            ИИН:
                            <input type="text" className="iin" name='iin' value={formData.iin} onChange={handleChange} />
                        </label>

                        <label>
                            E-mail:
                            <input type="email" className="email" name='email' value={formData.email} onChange={handleChange} />
                        </label>
                    </div>

                    <div className="secondblock">
                        <div className='region'>
                            {/* <label>
                                Страна:
                                <input type="tel" name='country' value={formData.country} onChange={handleChange} />
                            </label> */}

                            {/* <label>
                                Город:
                                <CitySelect value={formData.city} onChange={handleChange} />
                            </label> */}
                        </div>

                        {/* <label>
                            Адресс:
                            <input type="text" name='adress' value={formData.adress} onChange={handleChange} />
                        </label> */}

                        <label>
                            Прикрепите файл удостоверяющий болезнь:
                            <input type="file" accept="application/pdf" onChange={handleFileChange} />
                        </label>
                        <button className="submit" type="submit">
                        Отправить
                    </button>
                    </div>
                </div>
            )}


        </form>
    );

};

export default SubmitForm;




// glpat-FuhPsqDjxePGNvzr6MMJ


