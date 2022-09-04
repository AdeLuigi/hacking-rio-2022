
import React from "react";
import { Layout } from 'antd';
import MenuApp from "./../Menu"
import HeaderApp from "./../Header"
import "./style.css";

const { Header, Footer, Sider, Content } = Layout;
const LayoutAdmin = (props) => {
    return (
        <Layout className="layout">
            <Sider>
                <MenuApp></MenuApp>
            </Sider>

            <Layout>
                <Header>
                    <HeaderApp></HeaderApp>
                </Header>
                <Content className="content">{props.children}</Content>
            </Layout>

        </Layout>
    )
}

export default LayoutAdmin;