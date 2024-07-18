export default function Current({ img, user, alt, handelAdd }) {
    return (
    <div className="box current flex justify-evenly align-middle gap-1 w-full h-[100px]">
        <div className="w-1/12 bg-white text-white">
        <img
            className="rounded bg-transparent color-2 text-sm"
            src={img}
            alt={alt}
        />
        </div>
        <input id="input" type="text" placeholder="Add a comment..." />
        <button
            onClick={handelAdd}
            className="bg-blue-700 hover:bg-blue-300 text-white font-bold text-sm py-2 px-4 rounded uppercase h-9 ease-out duration-700 hover:scale-110"
        >
            send
        </button>
        </div>
    );
}
