import * as React from 'react';
import { auth, provider, signInWithPopup } from "../firebase"
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectUserName, selectUserPhoto, setUserLoginDetails, setSignOutState } from '../features/users/userSlice';
import NavBar from './NavBar';
import NavMenu from './NavMenu';
import Logo from './Logo';
import LoginButton from './LoginButton';
import UserImg from './UserImg';
import styled from 'styled-components';

const Header = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    React.useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                setUser(user);
                navigate('/home');
            }
        });
        // eslint-disable-next-line
    }, [userName]);

    const handleAuth = () => {
        if (!userName) {
            signInWithPopup(auth, provider).then((result) => {
                setUser(result.user);
            }).catch(error => error.message);
        } else if (userName) {
            auth.signOut().then(() => {
                dispatch(setSignOutState())
                navigate('/')
            }).catch((error) => alert(error.message))
        }
    }

    const setUser = (user) => {
        dispatch(setUserLoginDetails({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
        }));
    }

    return (
        <NavBar>
            <Logo />
            {
                !userName ? <LoginButton onClick={handleAuth}>Login</LoginButton> :
                    (
                        <>
                            <NavMenu />
                            <SignOut>
                                <UserImg src={userPhoto} alt={userName}></UserImg>
                                <DropDown>
                                    <span onClick={handleAuth}>Sign out</span>
                                </DropDown>
                            </SignOut>
                        </>
                    )}
        </NavBar>
    )
};

const DropDown = styled.div` 
    position:absolute;
    top:48px;
    right:0px;
    background:rgb(19,19,19);
    border: 1px solid rgba(15,15,15,0.34);
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px ;
    padding: 10px;
    font-size: 14px;
    letter-spacing: 3px;
    width: 100px;
    opacity:0;
`;
const SignOut = styled.div`
    position:relative;
    height: 48px;
    width:48px;
    display:flex;
    cursor: pointer;
    align-items:center;
    justify-content:center;

    ${UserImg}{
        border-radius:50%;
        width:100%;
    }

    &:hover{
        ${DropDown}{
            opacity:1;
            transition-duration: 1s;
        }
    }
`;

export default Header;