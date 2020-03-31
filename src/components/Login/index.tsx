import React, {useContext} from 'react'
import { useLoginQuery } from '../../generated/graphql'
import { AppContext } from '../../App'

interface Props {
    
}

const LoginContainer: React.FC<Props> = ({children}) => {
    const context = useContext(AppContext);
    const { data, loading, error } = useLoginQuery();
    if (loading) {
        return <div>Loading... at the top</div>;
    }

    if (error || !data) {
    return <div>ERROR big time<br />{JSON.stringify(error)}</div>;
    }
    context.setLogin(data.viewer.login);
    return (
        <div className="main">
            {children}
        </div>
    )
}

export default LoginContainer
