import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import UserItem from "./UserItem";
import { fetchUser, getUserStatus, selectAllUser } from "./usersSlice";
function UserList(){

    const dispatch = useDispatch()
    const users = useSelector(selectAllUser)
    console.log("UserList: "+users)
    const userStatus = useSelector(getUserStatus)

    useEffect(() => {
        if(userStatus === 'idle'){
            dispatch(fetchUser())
        }
        },[userStatus,dispatch])

        let content;

        if(userStatus === 'loading'){
            content = (<p>Loading....</p>)
        }
        if(userStatus === 'succeeded'){
            console.log(userStatus)
            content = users.map(
                (user) => (
                    <UserItem
                        id={user.id}
                        accountName={user.accountName}
                        role={user.role}
                        imageURL={user.imageURL}
                        username={user.username}
                        address={user.address}
                       
                    />
                )
            );
        }

 

    return content;
    
}
export default UserList;