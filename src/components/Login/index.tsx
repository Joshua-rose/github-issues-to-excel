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
        return <div>ERROR big time</div>;
    }
    context.setLogin(data.viewer.login);
    return (
        <div>
            {children}
        </div>
    )
}

export default LoginContainer
