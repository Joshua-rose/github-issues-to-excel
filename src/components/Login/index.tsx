import React, { useContext, useEffect } from 'react';
import { useLoginQuery } from '../../generated/graphql';
import AppContext from '../../utils/AppContext';

interface Props {

}

const LoginContainer: React.FC<Props> = ({ children }) => {
  const context = useContext(AppContext);
  const logout = () => {
    const { setToken } = context;
    setToken('');
    localStorage.removeItem('GitHubToken');
  };
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
    if ((error?.networkError as any)?.statusCode === 401) {
      return (
        <div>
          Error occured with authentication. Please log in again.
          <br />
          <button type="button" onClick={logout}>Logout</button>
        </div>
      );
    }
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
