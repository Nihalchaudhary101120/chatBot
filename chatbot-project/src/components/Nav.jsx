
export function NavBar({ clear, toggle }) {





    return (
        <>
            <nav>
                <h2>Chat Bot</h2>
                <div className="right-nav">
                    <button
                        onClick={clear}
                        className="newchat"

                    >New chat</button>
                    <button
                        onClick={toggle}
                        className="switchmode"
                    >Switch mode</button>
                </div>
            </nav>

        </>

    );
}