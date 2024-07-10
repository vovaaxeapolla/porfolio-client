import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Страница не найдена | Владимир Фадеев",
    description: "Автор Владимир Фадеев",
};

export default function NotFound() {
    return (
        <main className="page">
            <h1 className="page-title fade-in fi-1">404 - Страница не найдена</h1>
            <p className="text fade-in fi-2">Ой-ой! Эта страница не существует. Возможно, вы перешли по старой ссылке или допустили ошибку в адресе. Пожалуйста, попробуйте еще раз…</p>
            <Link className='link fade-in fi-3' href='/'>На главную</Link>
        </main>
    );
}