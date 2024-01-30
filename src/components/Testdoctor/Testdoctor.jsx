import React, { useState } from 'react';
import styles from './Testdoctor.css'
import { BrowserRouter as Router, Route, Routes, Link, Outlet, useNavigate } from 'react-router-dom';


const Testdoctor = () => {
    const [activeTab, setActiveTab] = useState('contacts');
    const [isModalOpen, setModalOpen] = useState(false);
    const [userList, setUserList] = useState([]);
    const [iinData, setIinData] = useState(null);
    const [iinValue, setIinValue] = useState('');
    const [iinValueList, setIinValueList] = useState([]);

    const navigate = useNavigate();


    const handlesubmitClick = async () => {
        try {
            const response = await fetch('https://halyklife-insurance-halyk.onrender.com/v1/diseaseByIIN', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ iin: iinValue }),
            });

            if (response.ok) {
                const data = await response.json();

                if (data != null && data.date != "" && data.IIN != "") {
                    setIinData(data);

                    const dateFromAPI = data[0].Date;
                    const iinFromAPI = data[0].IIN;

                    setIinValueList([
                        { label: 'IIN', value: iinFromAPI },
                        { label: 'Date', value: dateFromAPI },
                    ]);
                    console.log(iinValueList);
                    console.log('Data fetched:', data);
                } else {
                    console.error('Invalid data format:', data);
                }
            } else {
                console.error('Failed to fetch data');
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };



    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const handleCreateUserClick = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    const handleDeleteUser = (index) => {
        const updatedUserList = [...userList];
        updatedUserList.splice(index, 1);
        setUserList(updatedUserList);
    };

    return (
        <div className='adminpanel_d'>
            <div className="leftblock_d">
                <h3>Докторская панель</h3>

                <div className={`cont ${activeTab === 'contacts' ? 'active' : ''}`}>
                    <a
                        onClick={() => handleTabClick('contacts')}
                    >
                        Посмотреть историю пользователя
                    </a>
                </div>

                <div className={`cha_d ${activeTab === 'chat' ? 'active' : ''}`}>
                    <a
                        onClick={() => handleTabClick('chat')}
                    >
                        <Link to="submit" onClick={handlesubmitClick}>Отправить выписку в halyk life</Link>                    </a>
                </div>

                {/* <div className={`table_d ${activeTab === 'table' ? 'active' : ''}`}>
                    <a
                        onClick={() => handleTabClick('table')}
                    >
                        
                    </a>
                </div> */}
            </div>
            <div className="rightblock_d">
                <div className="insideblock_d">
                    <div className="searchpanel_d">
                        <div className="search_d">
                            <input
                                className='search_in_d'
                                type="search"
                                placeholder='Ввести ИИН'
                                value={iinValue}
                                onChange={(e) => setIinValue(e.target.value)}
                            />
                        </div>
                        <div className="createuser_d">
                            <button className='but_d' onClick={handlesubmitClick}>
                                Найти
                            </button>
                        </div>
                    </div>
                    <div className="insins_d">
                    <div className="left_d">
                    {/* Display IIN and Date as a list */}
                    <ul>
                        {iinValueList.map((item) => (
                            <li key={item.label}>
                                <strong>{item.label}:</strong> {item.value || 'N/A'}
                            </li>
                        ))}
                    </ul>
                </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Testdoctor;
