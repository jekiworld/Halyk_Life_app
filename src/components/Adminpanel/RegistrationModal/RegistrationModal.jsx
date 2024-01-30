import React from 'react';
import { useState } from 'react';
import './RegistrationModal.css';
import KazakhstanCities from '../../info/CityKazakhstan/CitySelect';


const RegistrationModal = ({ onClose, setUserList }) => {
    const [formData, setFormData] = useState({
        user_role: '',
        last_name: '',
        first_name: '',
        middle_name: '',
        birth_date: '',
        sex: '',
        phone: '',
        iin: '',
        email: '',
        id_card: '',
        id_card_from: '',
        country: 'Kazakhstan',
        region: '',
        city: '',
        adress: '',
        file: null,
        password: '',
    });
    const handleChange = (e) => {
        const { name, value } = e.target;

        if (/(phone|iin)/.test(name) && !/^\d*$/.test(value)) {
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
        console.log('Отправленные данные:', formData);
        setUserList((prevUserList) => [...prevUserList, formData]);
        onClose();


    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="main_r">
                <div className='firstblock_r'>
                    <label>
                        Тип пользователя:
                        <select className="userType_r" name='user_role' value={formData.user_role} onChange={handleChange}>
                            <option value="">Выберите тип пользователя</option>
                            <option value="3">Врач</option>
                            <option value="2">Обычный пользователь</option>
                        </select>
                    </label>
                    <div className="firstandlast_r">
                        <label>
                            Фамилия:
                            <input type="text" className="lastName_r" name='last_name' value={formData.last_name} onChange={handleChange} />
                        </label>

                        <label>
                            Имя:
                            <input type="text" className="firstName_r" name='first_name' value={formData.first_name} onChange={handleChange} />
                        </label></div>


                    <label>
                        Отчество:
                        <input type="text" className="middle_name" name='middleName' value={formData.middle_name} onChange={handleChange} />
                    </label>

                    <label>
                        Пароль:
                        <input type="text" className="password_r" name='password' value={formData.password} onChange={handleChange} />
                    </label>

                    <label>
                        Номер удостоверения личности:
                        <input type="text" name="id_card" value={formData.id_card} onChange={handleChange} />
                    </label>

                    <label>
                        Кем выдано:
                        <input type="text" name="id_card_from" value={formData.id_card_from} onChange={handleChange} />
                    </label>
                    <div className='birthinfo_r'>
                        <label>
                            Дата рождения:
                            <input type="date" className="birth_date" name='birth_date' value={formData.birthDate} onChange={handleChange} />
                        </label>

                        <label>
                            Пол:
                            <select className="gender_r" name='sex' value={formData.sex} onChange={handleChange}>
                                <option value="">Выберите пол</option>
                                <option value="male">Мужской</option>
                                <option value="female">Женский</option>
                            </select>
                        </label>
                    </div>
                </div>

                <div className="secondblock_r">
                    <div className='region_r'>
                        <label>
                            E-mail:
                            <input type="email" className="email_r" name='email' value={formData.email} onChange={handleChange} />
                        </label>
                    </div>

                    <label>
                        Телефон:
                        <input type="tel" className="phone_r" name='phone' value={formData.phone} onChange={handleChange} />
                    </label>
                    <label>
                        ИИН:
                        <input type="text" className="iin_r" name='iin' value={formData.iin} onChange={handleChange} />
                    </label>

                    <label>
                        Страна:
                        <input type="tel" name='country' value={formData.country} onChange={handleChange} />
                    </label>

                    <label>
                        Город:
                        <select className="city_r" name='city' value={formData.city} onChange={handleChange}>
                            <KazakhstanCities />
                        </select>
                    </label>

                    <label>
                        Адресс:
                        <input type="text" name='adress' value={formData.adress} onChange={handleChange} />
                    </label>

                    {/* <label>
                        Прикрепите файл удостоверяющий болезнь:
                        <input type="file" accept="application/pdf" onChange={handleFileChange} />
                    </label> */}
                </div>
            </div>

            <button className="submit_r" type="submit">Зарегестрировать</button>
        </form>

    );
};

export default RegistrationModal;
