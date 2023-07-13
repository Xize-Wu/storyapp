import React, { useState } from "react";
import Header from '../components/Header/Header';
import Head from 'next/head';
import axios from "axios";
import LoginForm from "../components/LoginForm/LoginForm";
import Cookies from 'js-cookie';


export default function Login() {
  const username = Cookies.get('username');


  return (
    <>
      <Head>
        <title>Login - CloudCastle</title>
      </Head>
        <Header username={username}/>
        <LoginForm />
    </>

  );
}