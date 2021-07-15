import React from 'react';
import Avatar from "@material-ui/core/Avatar";

export const MasterCard = ({ user }) => {
    return (
        <>
            <h3>Мастер</h3>
            <p><Avatar alt="Remy Sharp" src={user.avatar} /></p>
            <p>Логин: {user.username}</p>
            <p>Фамилия: {user.username}</p>
            <p>Имя: {user.username}</p>
            <p>Навыки: {user.skills}</p>
            <p>Рабочий день с: {user.workFrom}</p>
            <p>Рабочий день по: {user.workTo}</p>
        </>
    )
}