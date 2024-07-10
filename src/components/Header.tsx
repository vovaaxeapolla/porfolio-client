'use client'
import Link from "next/link"
import Image from 'next/image'
import { usePathname } from "next/navigation";
import classNames from "classnames";
import styles from '@/styles/Header.module.sass';
import { useEffect, useRef, useState } from "react";

export const Header = () => {
    const pathname = usePathname();
    const [isOpened, setIsOpened] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {

        const handler = (e: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
                setIsOpened(false);
            }
        };

        window.addEventListener('click', handler);
        return () => {
            window.removeEventListener('click', handler);
        }
    }, [])

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <Link href="/" className={styles.img}>
                    <Image
                        src="/avatar.png"
                        width={128}
                        height={128}
                        alt="Фотография автора"
                    />
                </Link>
                <div ref={menuRef} className={classNames(styles.menu, { [styles['menu-opened']]: isOpened })}>
                    <button className={styles.button} onClick={() => setIsOpened(p => !p)}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </button>
                    <ul className={styles.container}>
                        <Link className={classNames(styles.item, { [styles.active]: pathname === '/' })} href="/">Главная</Link>
                        <Link className={classNames(styles.item, { [styles.active]: pathname === '/about' })} href="/about">Обо мне</Link>
                        <Link className={classNames(styles.item, { [styles.active]: pathname === '/blog' })} href="/blog">Блог</Link>
                    </ul>
                </div>
            </nav>
        </header >
    )
}