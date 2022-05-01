import React, { useState } from 'react';
import '../css/Tab.css'

function Tab(props) {

    const loginTabClick = () => {

        const tabId = ['tabMember', 'tabNonMember'];

        tabId.forEach((item, index)=>{
            document.getElementById(item).classList.toggle("back");
            document.getElementById(item).classList.toggle("front");
        });
    }

    return (
        <main>
            <div className='login_tab_wrap'>
                <div id="tabMember" className='front' onClick = {() => loginTabClick()}>회원</div>
                <div id="tabNonMember" className='back' onClick = {() => loginTabClick()}>비회원</div>
            </div>
        </main>
    );
}

export default Tab;