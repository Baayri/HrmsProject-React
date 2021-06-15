import React from 'react'
import { Button } from 'react-bootstrap'

export default function SignOut({ signIn }) {
    return (
        <div>

            <Button onClick={signIn} variant="info" className="mx-2">Giriş Yap</Button>

            <Button variant="info">Kayıt Ol</Button>
            

        </div>
    )
}
