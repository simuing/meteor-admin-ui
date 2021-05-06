import React from 'react';
import { Link } from 'react-router-dom'

export const Dashboard = () => {
    return (
        <div>
            <div>
                <Link to="/chat">채팅하러가기~!</Link>
            </div>
        </div>
    )
}