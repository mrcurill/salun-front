import React from 'react';

export const UserCard = ({ user }) => {
    return (
        <>
            <h2>Пользователь</h2>
            <p>Логин: {user.username}</p>
            <p>Фамилия: {user.username}</p>
            <p>Имя: {user.username}</p>
        </>
    )
}