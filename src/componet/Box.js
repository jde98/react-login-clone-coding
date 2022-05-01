import React, { useState } from 'react';
import '../css/Box.css';

function Box(props) {
    return (
        <main>
            <input type={'text'} className='input' placeholder='아이디'></input>
            <input type={'password'} className='input' placeholder='비밀번호'></input>
            <button value={"로그인"} className=''>로그인</button>
        </main>
    );
}

export default Box;