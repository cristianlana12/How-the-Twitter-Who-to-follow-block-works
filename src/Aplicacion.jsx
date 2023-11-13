import { TwitterFollowCards } from "./TwitterFollowCards"

export const Aplicacion = () => {

    return (
        <div className="tw-content-card-follow">
            <h1>A quien Seguir</h1>
            <TwitterFollowCards userName="cristian_cordoba" initialIsFollowing={true}>cris</TwitterFollowCards>
            <TwitterFollowCards userName="pepe123"  initialIsFollowing={false}>joc</TwitterFollowCards>
            <TwitterFollowCards userName="shan123" > shan</TwitterFollowCards>
        </div >
    )
}
