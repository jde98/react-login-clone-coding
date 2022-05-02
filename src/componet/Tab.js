import React, { useState } from 'react';
import '../css/Tab.css'

function Tab(props) {

    const loginTabClick = (first) => {
        const array = ['tabMember', 'tabNonMember'];

        array.forEach(item => {
            if(item == first){
                document.getElementById(item).classList.add("front");
                document.getElementById(item).classList.remove("back");
            } else {
                document.getElementById(item).classList.add("back");
                document.getElementById(item).classList.remove("front");
            }
        });
    }

    return (
        <main>
            <div className='login_tab_wrap'>
                <div id="tabMember" className='front' onClick={() => loginTabClick('tabMember')}>회원</div>
                <div id="tabNonMember" className='back' onClick={() => loginTabClick('tabNonMember')}>비회원</div>
            </div>
        </main>
    );
}

export default Tab;