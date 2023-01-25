import React from 'react';
import module from './Header.module.scss'


function Header(props) {
    return (
        <header className={module.header}>
            <div className={module.header_content}>
                <ul>
                    <li>
                        Главная
                    </li>

                    <li>
                        Страница 1
                    </li>

                    <li>
                        Страница 2
                    </li>

                    <li>
                        Страница 3
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;