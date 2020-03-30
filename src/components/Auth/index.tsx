import React, {useEffect, useContext} from 'react'
import netlify from 'netlify-auth-providers'
import {AppContext} from '../../App'

interface Props {

}

const Auth = (props: Props) => {
    // const testForToken = localStorage.getItem('GitHubToken') || '';
    // const [token, setToken] = useState(testForToken)
    const context = useContext(AppContext)
    const {token, setToken} = context
    useEffect(() => {
        const localToken = localStorage.getItem('GitHubToken')
        if (token === '' && localToken) setToken(localToken as string)
        }, [])
    /**
     * see @link{https://github.com/kentcdodds/react-github-profile/blob/b0c6a4628535fcea32f4f6617efd03f6b29574f4/src/github-client.js#L1}
     */
    type auth = {
        token: string
    }
    async function authWithGitHub(): Promise<auth> {
        return new Promise((resolve, reject) => {
            var authenticator = new netlify({
                site_id: '6c020ac7-0ac3-4c9a-a2b6-7928880178c4',
            })
            authenticator.authenticate(
                { provider: 'github', scope: 'public_repo,repo,read:org,read:user' },
                function (err: any, data: { token: string }) {
                    if (err) {
                        reject(err)
                    }
                    resolve(data)
                },
            )
        })
    }

    const login = async () => {
        const data = await authWithGitHub();
        if (data) setToken(data.token);
        localStorage.setItem('GitHubToken', data.token)
    }
    const logout = () => {
        setToken('');
        localStorage.removeItem('GitHubToken')
    }

    return token ? (
        <button type="button" onClick={logout}>Logout</button>
    ) :
        (
            <button type="button" onClick={login}>Login</button>
        )
}

export default Auth
