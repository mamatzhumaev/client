import React from 'react'
import Container from "@mui/material/Container"
import styles from "./Header.module.css"
import Button from "@mui/material/Button"
import  {Link}  from 'react-router-dom'


export const Header = () => {
    return (
        <div className={styles.root}>
            <Container maxWidth="lg">
                <div className={styles.inner}>
                    <div className={styles.logo}>
                        <div>MYKTYBEK BLOG</div>
                    </div>
                    <div className={styles.buttons}>
                        <Button variant='contained' color='error'> Выйти</Button>
                        <Link to='/auth/sign-in'>
                            <Button variant='contained'>Войти</Button>
                        </Link>
                        <Link to='/auth/register'>
                            <Button variant='contained'>Создать аккаунт</Button>
                        </Link>
                    </div>
                </div>
            </Container>
        </div>
    )
}



