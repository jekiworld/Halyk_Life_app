import React, { useState } from 'react';
import './Adminpanel.css';
import RegistrationModal from './RegistrationModal/RegistrationModal';


const AdminPanelPage = () => {
    const [activeTab, setActiveTab] = useState('contacts');
    const [isModalOpen, setModalOpen] = useState(false); 
    const [userList, setUserList] = useState([]);


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
        <div className='adminpanel'>
            <div className="leftblock">
                <h3>Админская панель</h3>

                <div className={`cont ${activeTab === 'contacts' ? 'active' : ''}`}>
                    <a
                        onClick={() => handleTabClick('contacts')}
                    >
                        Контакты
                    </a>
                </div>

                <div className={`cha ${activeTab === 'chat' ? 'active' : ''}`}>
                    <a
                        onClick={() => handleTabClick('chat')}
                    >
                        Чат
                    </a>
                </div>

                <div className={`table ${activeTab === 'table' ? 'active' : ''}`}>
                    <a
                        onClick={() => handleTabClick('table')}
                    >
                        Таблица
                    </a>
                </div>
            </div>
            <div className="rightblock">
                <div className="insideblock">
                    <div className="searchpanel">
                        <div className="search">
                            <input className='search_in' type="search" placeholder='Введите имя' name="" id="" />
                        </div>
                        <div className="createuser">
                            <button className='but' onClick={handleCreateUserClick}>
                                Создать
                            </button>
                        </div>
                    </div>
                    <div className="insins">
                        <div className="left">
                            <div className="user-list-container">
                                <h4>Созданные пользователи:</h4>
                                <ul className="user-list">
                                    {userList.map((user, index) => (
                                        <li key={index} className="user-list-item">
                                            {user.userType === 'doctor' ? 'Врач' : 'Обычный пользователь'}: {user.firstName} {user.lastName}
                                            <button className="delete-button" onClick={() => handleDeleteUser(index)}>Удалить</button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="right">{isModalOpen && (
                            <RegistrationModal onClose={handleCloseModal} setUserList={setUserList} />
                        )}</div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AdminPanelPage;
