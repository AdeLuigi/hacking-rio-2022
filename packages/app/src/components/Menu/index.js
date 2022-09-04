import { Menu } from 'antd';
import React, { useState } from 'react';
import { MailOutlined } from '@ant-design/icons';
import logo from "./../../logo.svg"

function getItem(label, key, icon, children, theme) {
    return {
        key,
        icon,
        children,
        label,
        theme: "dark",
    };
}

const MenuApp = (props) => {
    const [current, setCurrent] = useState('1');

    const onClick = (e) => {
        setCurrent(e.key);
    };
    const items = [
        getItem("Status comunidade", 'statusComunity', <MailOutlined />),
        getItem("Dados primários", 'dataPrimary', <MailOutlined />),
        getItem("Dados secundários", 'dataSecundary', <MailOutlined />)
    ];
    return (
        <>
            <img src={logo} alt="logo_"></img>
            <br />
            <br />
            <Menu
                onClick={onClick}
                style={{
                    width: 200,
                }}
                defaultOpenKeys={['statusComunity']}
                selectedKeys={[current]}
                mode="vertical"
                theme="dark"
                items={items}
            />
        </>
    );
};

export default MenuApp;