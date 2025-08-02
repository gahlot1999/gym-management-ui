import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';

const Profile = () => {
  const { user, isAuthenticated, getAccessTokenSilently, logout } = useAuth0();

  useEffect(() => {
    async function getData() {
      try {
        const accessToken = await getAccessTokenSilently({
          authorizationParams: {
            audience: import.meta.env.VITE_AUDIENCE,
          },
        });

        const res = await fetch('http://localhost:8080/workout', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        const data = await res.text();

        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }

    getData();
  }, []);

  return (
    isAuthenticated && (
      <div>
        <img src={user?.picture} />
        <h2>{user?.name}</h2>
        <p>{user?.email}</p>
        <h3>User Metadata</h3>
        {/* {userMetadata ? (
          <pre>{JSON.stringify(userMetadata, null, 2)}</pre>
        ) : (
          'No user metadata defined'
        )} */}

        <br />
        <br />
        <br />

        <button
          onClick={() =>
            logout({ logoutParams: { returnTo: window.location.origin } })
          }
        >
          Log Out
        </button>
      </div>
    )
  );
};

export default Profile;
