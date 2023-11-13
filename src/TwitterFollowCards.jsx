import { useState } from "react"

export const TwitterFollowCards = ({ children, userName , initialIsFollowing}) => {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const handleClik =()=>{
        setIsFollowing(!isFollowing)
    }

    const text = isFollowing ? 'Siguiendo' : 'Seguir'

    const buttonClassName= isFollowing
    ? 'tw-button-followCard is-following'
    : 'tw-button-followCard'

    return (
        <article className="tw-followCard">
            <header>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNN9pStQjtTnLlep19q7QwETj3sYnArFGNa2j50jy6&s" alt="imagen" />
                <div>
                    <strong>{children}</strong>
                    <span>@{userName}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClik}>{text}
                    <span className="tw-followCard-nofollow">Dejar de Seguir</span>
                </button>
            </aside>
        </article>
    )
}
