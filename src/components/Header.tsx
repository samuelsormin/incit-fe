type HeaderProps = {
    onClick: any
}

export default function Header(props: HeaderProps) {
    return (
        <header className="fixed w-full left-0 bg-white flex justify-between items-center h-16 px-6 sm:px-10 shadow z-10">
            <div className="hidden xl:block flex-none w-72"></div>
            <div className="flex-grow flex items-center">
                <svg className="mr-3" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 17.0586L12.972 12.0306C14.1803 10.58 14.7828 8.71952 14.6542 6.83605C14.5256 4.95259 13.6759 3.19121 12.2817 1.91831C10.8876 0.645413 9.05634 -0.0409893 7.16898 0.00189494C5.28163 0.0447792 3.48346 0.813648 2.14855 2.14855C0.813648 3.48346 0.0447792 5.28163 0.00189494 7.16898C-0.0409893 9.05634 0.645413 10.8876 1.91831 12.2817C3.19121 13.6759 4.95259 14.5256 6.83605 14.6542C8.71952 14.7828 10.58 14.1803 12.0306 12.972L17.0586 18L18 17.0586ZM1.35538 7.34744C1.35538 6.16232 1.70681 5.00382 2.36522 4.01843C3.02364 3.03304 3.95947 2.26502 5.05438 1.8115C6.14928 1.35797 7.35409 1.23931 8.51643 1.47051C9.67878 1.70172 10.7465 2.27241 11.5845 3.11041C12.4225 3.94842 12.9932 5.0161 13.2244 6.17845C13.4556 7.34079 13.3369 8.5456 12.8834 9.6405C12.4299 10.7354 11.6618 11.6712 10.6765 12.3297C9.69106 12.9881 8.53256 13.3395 7.34744 13.3395C5.75879 13.3377 4.23571 12.7059 3.11236 11.5825C1.98901 10.4592 1.35714 8.9361 1.35538 7.34744Z" fill="#505050" />
                </svg>
                <input type="text" placeholder="Search anything here..." className="w-48 sm:w-96 outline-0" />
            </div>
            <div className="flex items-center">
                <button className="flex items-center mr-2 sm:mr-8">
                    <svg className="mr-2" width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.0588 8.5H7.11765M14.1765 11.3125L17 8.5L14.1765 5.6875M9.47059 3.8125V2.875C9.47059 2.37772 9.27227 1.90081 8.91926 1.54917C8.56625 1.19754 8.08747 1 7.58824 1H2.88235C2.38312 1 1.90434 1.19754 1.55133 1.54917C1.19832 1.90081 1 2.37772 1 2.875V14.125C1 14.6223 1.19832 15.0992 1.55133 15.4508C1.90434 15.8025 2.38312 16 2.88235 16H7.58824C8.08747 16 8.56625 15.8025 8.91926 15.4508C9.27227 15.0992 9.47059 14.6223 9.47059 14.125V13.1875" stroke="#EE0D0D" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="hidden sm:block text-red-500"><strong>Logout</strong></span>
                </button>
                <button onClick={() => props.onClick(true)}>
                    <svg width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 8.57143H25V11.4286H0V8.57143ZM0 0H25V2.85714H0V0ZM0 17.1429H25V20H0V17.1429Z" fill="#323A46" />
                    </svg>
                </button>
            </div>
        </header>
    )
}
