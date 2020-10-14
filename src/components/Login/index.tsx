import React, { useContext, useEffect } from 'react';
import { useLoginQuery } from '../../generated/graphql';
import AppContext from '../../utils/AppContext';

interface Props {

}

const LoginContainer: React.FC<Props> = ({ children }) => {
  const context = useContext(AppContext);
  const { data, loading, error } = useLoginQuery();
  useEffect(() => {
    if (data && !loading && !error) {
      const { setLogin } = context;
      setLogin(data.viewer.login);
    }
  }, [data, context, error, loading]);
  if (loading) {
    return <div>Loading... at the top</div>;
  }

  if (error || !data) {
    return (
      <div>
        ERROR big time
        <br />
        {JSON.stringify(error)}
      </div>
    );
  }

  return (
    <div className="main">
      {children}
    </div>
  );
};

export default LoginContainer;
