type CardProps = {
    img: string
    imgWidth: string
    title: string
    description: string
}

export default function Card(props: CardProps) {
    return (
        <div className="relative bg-white rounded shadow p-4">
            <div className="absolute right-4 top-2 leading-none">
                <button>
                    <svg width="15" height="3" viewBox="0 0 15 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.25 2.8125C2.97487 2.8125 3.5625 2.22487 3.5625 1.5C3.5625 0.775126 2.97487 0.1875 2.25 0.1875C1.52513 0.1875 0.9375 0.775126 0.9375 1.5C0.9375 2.22487 1.52513 2.8125 2.25 2.8125Z" fill="#323A46" />
                        <path d="M7.5 2.8125C8.22487 2.8125 8.8125 2.22487 8.8125 1.5C8.8125 0.775126 8.22487 0.1875 7.5 0.1875C6.77513 0.1875 6.1875 0.775126 6.1875 1.5C6.1875 2.22487 6.77513 2.8125 7.5 2.8125Z" fill="#323A46" />
                        <path d="M12.75 2.8125C13.4749 2.8125 14.0625 2.22487 14.0625 1.5C14.0625 0.775126 13.4749 0.1875 12.75 0.1875C12.0251 0.1875 11.4375 0.775126 11.4375 1.5C11.4375 2.22487 12.0251 2.8125 12.75 2.8125Z" fill="#323A46" />
                    </svg>
                </button>
            </div>
            <div className="mt-2 mb-4">
                <img src={props.img} className={props.imgWidth} />
            </div>
            <div className="space-y-1">
                <p className="font-bold">{props.title}</p>
                <p className="text-xs">{props.description}</p>
            </div>
        </div>
    )
}
