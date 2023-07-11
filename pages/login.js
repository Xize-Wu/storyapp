import React, { useState } from "react";
import Header from '../components/Header/Header';
import Head from 'next/head';
import axios from "axios";
import { AuthContextProvider, useAuth } from "../components/Header/AuthContext.";
import LoginForm from "../components/LoginForm/LoginForm";

export default function Login() {

  return (
    <>
      <AuthContextProvider>
      <Head>
        <title>Login - CloudCastle</title>
      </Head>
        <Header />
        <LoginForm />
      </AuthContextProvider>

    </>

  );
}