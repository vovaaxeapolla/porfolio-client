import Link from "next/link";
import Image from "next/image";
import styles from '@/app/about/page.module.sass';

export default function About() {
    return (
        <main className="page">
            <h1 className="page-title fade-in fi-1">Владимир Фадеев</h1>
            <p className="text fade-in fi-2">Я фулстак разраб</p>
            <section className="fade-in fi-3">
                <h2>Мои личные проекты</h2>
                <div className={styles.container}>
                    <div className={styles.row}>
                        <div className={styles.title}></div>
                        <div className={`tile ${styles.text}`}>

                        </div>
                    </div>
                </div>
            </section>
        </main >
    );
}