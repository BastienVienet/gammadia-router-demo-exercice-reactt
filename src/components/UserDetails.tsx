import {useParams} from "react-router-dom";

export const UserDetails = () => {
    const params = useParams()
    const userID = params.userId
    // Same than `const {userId} = useParams()`
    return (
        <div>
            Details about user {userID}
        </div>
    )
}